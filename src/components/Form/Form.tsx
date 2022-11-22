import { SubmitHandler, useForm } from "react-hook-form";
import { Title, Submit } from "../";
import { useBudget, useExpenses } from "../../context";
import { IFormData } from "../../types/types";
import { v4 } from "uuid";
import { StyledForm, StyledInputForm } from "./styles";

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>();
  const { setNewExpense } = useExpenses();
  const { setRemaining, setSpending } = useBudget();
  const onSubmit: SubmitHandler<IFormData> = ({ name, price }) => {
    setNewExpense({ name, price, id: v4() });

    setSpending(+price);
    setRemaining();
  };
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Title label="add expense" />
      <StyledInputForm
        {...register("name", { required: true })}
        type="text"
        placeholder="enter name ..."
      />
      <StyledInputForm
        {...register("price", { required: true })}
        type="number"
        placeholder="enter cost ..."
      />
      <Submit />
    </StyledForm>
  );
};
