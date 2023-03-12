import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.scss";
import Layout from "./components/Layout/Layout";
import MenuPage from "./pages/Menu";
import HomePage from "./pages/Home";
import ProjectsPage from "./pages/Projects";
import SingleProject from "./pages/SingleProject";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "projects", element: <ProjectsPage /> },
        { path: "projects/:id", element: <SingleProject /> },
        { path: "menu", element: <MenuPage /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
