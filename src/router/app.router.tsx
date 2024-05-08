import { ProductPage } from "@/pages/productPage";
import { ResultsPage } from "@/pages/resultsPage";
import { SearchPage } from "@/pages/searchPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SearchPage />
  },
  {
    path: "/items",
    element: <ResultsPage />
  },
  {
    path: "/items/:productId",
    element: <ProductPage />
  }
]);

export default router;
