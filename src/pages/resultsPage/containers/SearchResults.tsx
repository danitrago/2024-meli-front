import { BreadCrumb } from "@/components/breadcrumb";
import { Surface } from "@/components/surface";
import useDataReducer from "@/hooks/useDataReducer";
import { getSearchResults } from "@/services/search.services";
import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search");

  const [data, dispatchData] = useDataReducer();
  const { categories = [], items = [] } = data.data || {};

  const fetchData = async (q: string) => {
    const data = await getSearchResults(q);
    dispatchData({ type: "SUCCESS", payload: data.data });
  };

  useEffect(() => {
    if (!searchTerm) return;
    dispatchData({ type: "LOADING" });
    fetchData(searchTerm);
  }, [searchTerm]);

  if (data.loading) return <div>Loading...</div>;

  return (
    <section>
      <BreadCrumb items={categories} />
      <Surface>
        <p>Officia do ex dolore proident velit duis. Reprehenderit ullamco ullamco duis non ex non. Commodo consequat proident ut non magna. Labore quis adipisicing esse ad ut ex id minim fugiat.</p>
        {items.map((product: any) => (
          <li key={product.id}>
            <Link to={`/items/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </Surface>
    </section>
  );
};

export default SearchResults;
