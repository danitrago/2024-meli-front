import meliInstance from "./axios-instances/meli.instance";

export const getSearchResults = async (searchTerm: string) => {
  return meliInstance.get(`/items?q=${searchTerm}`);
};
