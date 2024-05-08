import SearchInput from "@/components/SearchInput";
import { Layout } from "@/layout";
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
  }, [searchTerm]);

  return (
    <Layout>
      Results for: {searchTerm}
      {products.map((product: any) => (
        <li key={product.id}>
          <Link to={`/items/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </Layout>
  );
};

export default Results;
