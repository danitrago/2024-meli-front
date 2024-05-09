import { Layout } from "@/layout";
import Container from "@/layout/Container";
import ProductDetails from "./containers/ProductDetails";

const ProductPage = () => {
  return (
    <Layout>
      <Container>
        <ProductDetails />
      </Container>
    </Layout>
  );
};

export default ProductPage;
