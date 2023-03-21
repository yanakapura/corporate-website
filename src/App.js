import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.scss";
import Layout from "./components/Layout/Layout";
import MenuPage from "./pages/Menu";
import HomePage from "./pages/Home";
import ProjectsPage from "./pages/Projects";
import SingleProject from "./pages/SingleProject";
import ErrorPage from "./pages/Error";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "menu", element: <MenuPage /> },
        { path: "projects", element: <ProjectsPage /> },
        { path: "projects/:id", element: <SingleProject /> },
        { path: "servicies" },
      ],
      errorElement: <ErrorPage/>
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
