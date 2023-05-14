import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Menu from "../Menu/Menu";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import ScrollToTop from "../UI/ScrollToTop";
import { useEffect } from "react";

const Layout = (props) => {
  const menuIsOpen = useSelector((state) => state.ui.menuIsOpen);

  
  return (
    <>
      <Menu showMenu={menuIsOpen} />
      <Header showMenu={true}/>
      <main>
        <ScrollToTop />
        {props.children}
        <Outlet />
      </main>
      {!menuIsOpen && <Footer />}
    </>
  );
};

export default Layout;
