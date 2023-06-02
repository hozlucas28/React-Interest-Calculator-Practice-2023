import { useState } from 'react';

import * as Yup from 'yup';
import { Formik, Form } from 'formik';

import { TEXTS } from './constants/TEXTS.js';

import Container from './components/Container';
import Section from './components/Section';
import Input from './components/Input';
import Button from './components/Button';
import Balance from './components/Balance';

const compoundInterest = (deposit, contribution, years, rate) => {
	let total = deposit;
	for (let i = 0; i < years; i++) {
		total = (total + contribution) * (rate + 1);
	}
	return Math.round(total);
};

const formatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
	minimumFractionDigits: 2,
	maximumFractionDigits: 2
});

function App() {
	const [balance, setBalance] = useState('');

	const handleSubmit = ({ deposit, contribution, years, rate }) => {
		const total = compoundInterest(
			Number(deposit),
			Number(contribution),
			Number(years),
			Number(rate)
		);

		setBalance(formatter.format(total));
	};

	return (
		<Container>
			<Section>
				<Formik
					initialValues={{
						deposit: '',
						contribution: '',
						years: '',
						rate: ''
					}}
					onSubmit={handleSubmit}
					validationSchema={Yup.object({
						deposit: Yup.number()
							.required(TEXTS.form.inputs.errors.required)
							.typeError(TEXTS.form.inputs.errors.type),
						contribution: Yup.number()
							.required(TEXTS.form.inputs.errors.required)
							.typeError(TEXTS.form.inputs.errors.type),
						years: Yup.number()
							.required(TEXTS.form.inputs.errors.required)
							.typeError(TEXTS.form.inputs.errors.type),
						rate: Yup.number()
							.required(TEXTS.form.inputs.errors.required)
							.typeError(TEXTS.form.inputs.errors.type)
							.min(0, TEXTS.form.inputs.errors.min)
							.max(1, TEXTS.form.inputs.errors.max)
					})}
				>
					<Form>
						<Input
							name="deposit"
							type="number"
							label={TEXTS.form.labels.deposit.text}
						></Input>
						<Input
							name="contribution"
							type="number"
							label={TEXTS.form.labels.contribution.text}
						></Input>
						<Input
							name="years"
							type="number"
							label={TEXTS.form.labels.years.text}
						></Input>
						<Input
							name="rate"
							type="number"
							label={TEXTS.form.labels.rate.text}
						></Input>
						<Button type="submit">{TEXTS.form.submit.text}</Button>
					</Form>
				</Formik>
				{balance !== '' ? (
					<Balance>
						{TEXTS.result.text} {balance}
					</Balance>
				) : null}
			</Section>
		</Container>
	);
}

export default App;
