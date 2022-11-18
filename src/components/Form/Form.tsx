import { SubmitHandler, useForm } from "react-hook-form";
import { Title, Submit } from "../";
import { useExpenses, useFormContext } from "../../context";
import { IExpense, IFormData } from "../../types/types";
import { v4 as uuidv4 } from "uuid";

export const Form = () => {
  const { register, handleSubmit } = useForm<IFormData>();
  const { setNewExpense } = useExpenses();
  const onSubmit: SubmitHandler<IFormData> = ({ name, price }) => {
    setNewExpense({ name, price, id: uuidv4() });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Title label="add expense" />
      <input
        {...register("name", { required: true })}
        type="text"
        placeholder="enter name ..."
      />
      <input
        {...register("price", { required: true })}
        type="number"
        placeholder="enter cost ..."
      />
      <Submit />
    </form>
  );
};
