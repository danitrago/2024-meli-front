import { Product } from "@/types/product.types";
import { formatCurrency } from "@/utils/formatCurrency.util";

const productAdapter: (data: any) => Product = (data: any) => {
  return {
    id: data.id,
    title: data.title,
    prettyPrice: formatCurrency.format(data.price?.amount || 0),
    img: data.picture,
    condition: data.condition === "new" ? "Nuevo" : "Usado",
    freeShipping: data.free_shipping,
    soldQuantity: data.sold_quantity,
    description: data.description
  };
};

export default productAdapter;
