import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  firstName: yup
    .string()
    .min(3, "Pokemon should have at least 3 characters")
    .max(10)
    .required(),
}).required();

type FormData = yup.InferType<typeof schema>;

const Search = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data: FormData) => console.log(data);

  return (
    <form onSubmit={ handleSubmit(onSubmit) }>
      <input { ...register("firstName") } />
      <p>{ errors.firstName?.message }</p>
      <input type="submit" />
    </form>
  );
}

export default Search;
