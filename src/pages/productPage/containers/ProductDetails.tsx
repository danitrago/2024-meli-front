import productAdapter from "@/adapters/product.adapter";
import { Empty } from "@/components/empty";
import { Spinner } from "@/components/spinner";
import { Surface } from "@/components/surface";
import useDataReducer from "@/hooks/useDataReducer";
import { getProductDetails } from "@/services/products.service";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductSheet } from "../components/productSheet";

const ProductDetails = () => {
  const { productId } = useParams();

  const [data, dispatchData] = useDataReducer();
  const { item = {} } = data.data || {};

  const fetchData = async (id: string) => {
    try {
      const response = await getProductDetails(id);
      const item = productAdapter(response.data?.item);
      dispatchData({
        type: "SUCCESS",
        payload: { ...response.data, item }
      });
    } catch (error) {
      dispatchData({ type: "ERROR" });
    }
  };

  useEffect(() => {
    if (!productId) return;
    dispatchData({ type: "LOADING" });
    fetchData(productId);
  }, [productId]);

  if (data.loading) return <Spinner />;

  if (data.error)
    return <Empty text={`Ups, no hay información para: "${productId}"`} />;

  return (
    <section>
      {/* <BreadCrumb items={categories} /> */}
      <Surface>
        <ProductSheet {...item} />
      </Surface>
    </section>
  );
};

export default ProductDetails;
