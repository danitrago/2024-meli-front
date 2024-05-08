import { Layout } from "@/layout";
import { getProductDetails } from "@/services/products.service";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
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
      ProductDetails of: {JSON.stringify(productId)}
      <hr />
      {product.title}
    </Layout>
  );
};

export default ProductDetails;
