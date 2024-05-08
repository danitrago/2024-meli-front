import meliInstance from "./axios-instances/meli.instance";

export const getProductDetails = async (productId: string) => {
  return meliInstance.get(`/items/${productId}`);
};
