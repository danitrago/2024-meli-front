import Input from "@/components/Input";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FormFields } from "../types/formFields.type";

const SearchInput = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormFields>();
  const onSubmit: SubmitHandler<FormFields> = (data) => {
    console.log(data.search);
    navigate(`/items?search=${data.search.toString().trim()}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Link to="/">🏚️</Link>
        <Input
          placeholder="Nunca dejes de buscar"
          {...register("search", { required: true })}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default SearchInput;
