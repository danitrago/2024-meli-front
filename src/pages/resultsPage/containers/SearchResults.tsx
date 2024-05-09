import productAdapter from "@/adapters/product.adapter";
import { BreadCrumb } from "@/components/breadcrumb";
import { Empty } from "@/components/empty";
import { Spinner } from "@/components/spinner";
import { Surface } from "@/components/surface";
import useDataReducer from "@/hooks/useDataReducer";
import { getSearchResults } from "@/services/search.services";
import { Product } from "@/types/product.types";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { ProductCard } from "../components/productCard";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search");

  const [data, dispatchData] = useDataReducer();
  const { categories = [], items = [] } = data.data || {};

  const fetchData = async (q: string) => {
    try {
      const response = await getSearchResults(q);
      const items = response.data?.items.map((item: any) =>
        productAdapter(item)
      );
      dispatchData({ type: "SUCCESS", payload: { ...response.data, items } });
    } catch (error) {
      alert("Ups, hubo un error cargando los resultados de búsqueda");
    }
  };

  useEffect(() => {
    if (!searchTerm) return;
    dispatchData({ type: "LOADING" });
    fetchData(searchTerm);
  }, [searchTerm]);

  if (data.loading) return <Spinner />;

  if (!items.length) return <Empty />;

  return (
    <section>
      <BreadCrumb items={categories} />
      <Surface>
        {items.slice(0, 4).map((product: Product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </Surface>
    </section>
  );
};

export default SearchResults;
