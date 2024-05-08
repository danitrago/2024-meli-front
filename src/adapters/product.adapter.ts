import { Product } from "@/types/product.types";

const productAdapter: (data: any) => Product = (data: any) => {
  return {
    id: data.id,
    title: data.title,
    prettyPrice: data.price.currency,
    img: data.picture,
    condition: data.condition,
    freeShipping: data.free_shipping,
    soldQuantity: data.sold_quantity,
    description: data.description
  };
};

export default productAdapter;
