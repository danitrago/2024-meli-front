import { Layout } from "@/layout";
import searchImg from "@/assets/search.webp";
import Container from "@/layout/Container";

const Search = () => {
  return (
    <Layout>
      <img src={searchImg} alt="Banner" style={{ width: "100%" }} />
    </Layout>
  );
};

export default Search;
