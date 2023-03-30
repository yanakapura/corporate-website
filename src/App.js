import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.scss";
import Layout from "./components/Layout/Layout";
import MenuPage from "./pages/Menu";
import HomePage from "./pages/Home";
import ProjectsPage from "./pages/Projects";
import SingleProject from "./pages/SingleProject";
import ErrorPage from "./pages/Error";
import ServicesPage from "./pages/Services";
import AboutPage from "./pages/About";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { AnimatePresence } from "framer-motion";
// import ServiceDetail from "./components/Services/ServiceDetail";
// import { AnimatedRoute } from "react-router-transition";

function App() {
  const menuIsOpen = useSelector(state=>state.ui.menuIsVisible)


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "menu", element: <MenuPage /> },
        // {
        //   path: "menu",
        //   element: <CSSTransition
        //   mountOnEnter
        //   unmountOnExit
        //   in={menuIsOpen}
        //   timeout={500}
        //   classNames="menu"
        // ><MenuPage /></CSSTransition>
          
        // },
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

  return <AnimatePresence><RouterProvider router={router} /></AnimatePresence>;
}

export default App;
