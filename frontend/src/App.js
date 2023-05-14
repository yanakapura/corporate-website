import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
// import MenuPage from "./pages/Menu";
import HomePage from "./pages/Home";
import ProjectsPage from "./pages/Projects";
import SingleProject from "./pages/SingleProject";
import ErrorPage from "./pages/Error";
import ServicesPage from "./pages/Services";
import AboutPage from "./pages/About";
import { loader as homeLoader } from "./pages/Home";
import { loader as projectDetailLoader } from "./components/ProjectDetail/ProjectDetail";
import { loader as servicesLoader } from "./pages/Services";

import "./global.scss";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> }, // loader: homeLoader },
        { path: "projects", element: <ProjectsPage /> },
        {
          path: "projects/:id",
          element: <SingleProject />,
          // loader: projectDetailLoader,
        },
        { path: "about", element: <AboutPage /> },
        {
          path: "services",
          element: <ServicesPage />,
          // loader: servicesLoader,
          children: [{ path: ":id", element: <ServicesPage /> }],
        },
      ],
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
