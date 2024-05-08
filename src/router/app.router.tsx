import ProductDetails from "@/pages/ProductDetails";
import Results from "@/pages/Results";
import Search from "@/pages/Search";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Search />
  },
  {
    path: "/items",
    element: <Results />
  },
  {
    path: "/items/:productId",
    element: <ProductDetails />
  }
]);

export default router;
