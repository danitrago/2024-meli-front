import { Layout } from "@/layout";
import Container from "@/layout/Container";
import SearchResults from "./containers/SearchResults";

const ResultsPage = () => {
  return (
    <Layout>
      <Container>
        <SearchResults />
      </Container>
    </Layout>
  );
};

export default ResultsPage;
