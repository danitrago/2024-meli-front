import React from "react";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    console.log(data.search);
    navigate(`/items?search=${data.search}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="search" type="text" required />
      </form>
    </div>
  );
};

export default SearchInput;
