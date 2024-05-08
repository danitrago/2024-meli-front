import { useSearchParams } from "react-router-dom";

const Results = () => {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search");

  return <div>Results {searchTerm}</div>;
};

export default Results;
