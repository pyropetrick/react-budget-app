import { useForm } from "react-hook-form";
import { Title, Input, Submit } from "../";

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <form onSubmit={handleSubmit((data: any) => console.log(data))}>
      <Title label="add expense" />
      <Input {...register()} />
      <Input {...register()} />
      <Submit />
    </form>
  );
};
