import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomPage";
import Layout from "./pages/Layout";
import GifDetailPage from "./pages/GifDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "gif/:id", element: <GifDetailPage /> },
    ],
  },
]);

export default router;
