import { useParams } from "react-router-dom";

const ProductDetails = () => {
  let { productId } = useParams();
  return <div>ProductDetails of: {JSON.stringify(productId)}</div>;
};

export default ProductDetails;
