import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
// import MenuPage from "./pages/Menu";
import HomePage from "./pages/Home";
import ProjectsPage from "./pages/Projects";
import SingleProject from "./pages/SingleProject";
import ErrorPage from "./pages/Error";
import ServicesPage from "./pages/Services";
import AboutPage from "./pages/About";

import "./global.scss";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "projects", element: <ProjectsPage /> },
        { path: "projects/:id", element: <SingleProject /> },
        { path: "about", element: <AboutPage /> },
        {
          path: "services",
          element: <ServicesPage />,
          // children: [{ index: true, element: <ServiceDetail /> }],
        },
        { path: "services/:id", element: <ServicesPage /> },
      ],
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
