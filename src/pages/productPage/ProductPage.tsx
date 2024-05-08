import { Layout } from "@/layout";
import Container from "@/layout/Container";
import { getProductDetails } from "@/services/products.service";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductPage = () => {
  let { productId } = useParams();
  const [product, setProduct] = useState<any>({});

  const fetchData = async () => {
    if (!productId) return;
    const data = await getProductDetails(productId);
    console.log(data.data.item);
    setProduct(data.data.item);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout>
      <Container>
        ProductDetails of: {JSON.stringify(productId)}
        <hr />
        {product.title}
      </Container>
    </Layout>
  );
};

export default ProductPage;
