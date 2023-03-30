import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ScrollToTop from "../UI/ScrollToTop";
import Navigation from "../Menu/Navigation";

const Layout = (props) => {
  const menuIsOpen = useSelector((state) => state.ui.menuIsVisible);

  return (
    <>
      <Navigation showMenu={menuIsOpen} />
      <Header menuIsOpen={menuIsOpen} showMenu={true}/>
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
