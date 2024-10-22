import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateStep1 } from "../../../../reducers/form.reducer";
import { useNavigate } from "react-router-dom";
import {
	NumberStep,
	Form,
	Label,
	InputText,
	Input,
	ErrorText,
	Button,
	InnerForm,
} from "./StyledStep1";
import { useEffect } from "react";

const Step1 = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const dispatch = useDispatch();
	const navigate = useNavigate();
	const step1Data = useSelector((state) => state.form.step1);

	const onSubmit = (data) => {
		dispatch(updateStep1(data));
		navigate("/brief/step-2");
	};

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	}, []);

	return (
		<>
			<NumberStep>1 / 3</NumberStep>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<InnerForm>
					<Label>
						<InputText className="input-required">Ім’я</InputText>

						<Input
							defaultValue={step1Data.name}
							{...register("name", { required: "Ім’я є обов’язковим полем" })}
						/>
						{errors.name && <ErrorText>{errors.name.message}</ErrorText>}
					</Label>

					<Label>
						<InputText className="input-required">
							Контакт для зв’язку
						</InputText>

						<Input
							defaultValue={step1Data.contact}
							{...register("contact", {
								required: "Контакт є обов’язковим полем",
							})}
						/>
						{errors.contact && <ErrorText>{errors.contact.message}</ErrorText>}
					</Label>

					<Label>
						<InputText>Назва компанії</InputText>

						<Input defaultValue={step1Data.company} {...register("company")} />
					</Label>

					<Label>
						<InputText>Посилання на сайт або соц мережі</InputText>

						<Input defaultValue={step1Data.website} {...register("website")} />
					</Label>
				</InnerForm>

				<Button type="submit">Продовжити</Button>
			</Form>
		</>
	);
};

export default Step1;
