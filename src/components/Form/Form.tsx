import { SubmitHandler, useForm } from "react-hook-form";
import { Title, Submit, ErrorMessage } from "../";
import { useBudgetContext, useExpensesContext } from "../../context";
import { IFormData } from "../../types/types";
import { v4 } from "uuid";
import { StyledForm, StyledInputForm } from "./styles";

export const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormData>({ mode: "onBlur" });
  const { setNewExpense } = useExpensesContext();
  const { setRemaining, setSpending, budget } = useBudgetContext();
  const onSubmit: SubmitHandler<IFormData> = ({ name, price }) => {
    if (budget > 0) {
      setNewExpense({ name, price, id: v4() });
      setSpending(+price);
      setRemaining();
      reset();
    }
  };
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Title label="add expense" />
      <StyledInputForm
        {...register("name", {
          required: "Name is required",
          minLength: { value: 4, message: "Minimum characters 4" },
        })}
        type="text"
        placeholder="enter name ..."
      />
      {errors.name && <ErrorMessage message={errors.name?.message} />}
      <StyledInputForm
        {...register("price", {
          required: "Price is required",
          minLength: { value: 2, message: "Minimum characters 2" },
        })}
        type="number"
        placeholder="enter cost ..."
      />
      {errors.price && <ErrorMessage message={errors.price?.message} />}
      <Submit />
    </StyledForm>
  );
};
