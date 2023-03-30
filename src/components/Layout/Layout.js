import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ScrollToTop from "../UI/ScrollToTop";
import { uiActions } from "../../store/ui-slice";
import Navigation from "../Menu/Navigation";
import { CSSTransition } from "react-transition-group";

const Layout = (props) => {
  const location = useLocation();

  // const [menuIsOpen, setMenuIsOpen] = useState(false);

  const dispatch = useDispatch();
  const menuIsOpen = useSelector((state) => state.ui.menuIsVisible);

  useEffect(() => {
    if (location.pathname === "/menu") {
      // setMenuIsOpen(true);
      // dispatch(uiActions.setMenu({menuIsVisible: true}))
    } else {
      // setMenuIsOpen(false);
      // dispatch(uiActions.setMenu({menuIsVisible: false}))
    }
  }, [menuIsOpen, location]);

  return (
    <>
      <Header menuIsOpen={menuIsOpen} showMenu={true}/>
      {/* {menuIsOpen && <Navigation showMenu={menuIsOpen}/>} */}
      <Navigation showMenu={menuIsOpen} />
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
