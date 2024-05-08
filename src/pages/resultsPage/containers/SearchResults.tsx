import { BreadCrumb } from "@/components/breadcrumb";
import { getSearchResults } from "@/services/search.services";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search");
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchProducts = async () => {
    if (!searchTerm) return;
    const data = await getSearchResults(searchTerm);
    console.log(data);
    setProducts(data.data.items);
    setCategories(data.data.categories);
  };

  useEffect(() => {
    fetchProducts();
  }, [searchTerm]);
  
  return (
    <div>
      <BreadCrumb items={categories} />
      <p>Results for: {searchTerm}</p>
      {products.map((product: any) => (
        <li key={product.id}>
          <Link to={`/items/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </div>
  );
};

export default SearchResults;
