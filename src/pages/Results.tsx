import SearchInput from "@/components/SearchInput";
import { getSearchResults } from "@/services/search.services";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const Results = () => {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search");
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    if (!searchTerm) return;
    const data = await getSearchResults(searchTerm);
    console.log(data);
    setProducts(data.data.items);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <SearchInput />
      <hr />
      Results {searchTerm} {import.meta.env.VITE_API_URL}
      {products.map((product: any) => (
        <li key={product.id}>
          <Link to={`/items/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </div>
  );
};

export default Results;
