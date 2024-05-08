import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FormFields } from "../../types/formFields.type";
import "./searchForm.styles.scss";
import { Input } from "@/components/input";
import { Button } from "@/components/button";

const SearchForm = () => {
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
    <form className="searchForm" onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="Nunca dejes de buscar"
        {...register("search", { required: true })}
      />
      <Button type="submit">🔍</Button>
    </form>
  );
};

export default SearchForm;
