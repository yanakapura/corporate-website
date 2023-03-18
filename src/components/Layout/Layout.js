import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Layout = () => {
  const location = useLocation();

  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    if (location.pathname === '/menu') {
      setMenuIsOpen(true);
    } else {
        setMenuIsOpen(false);
    }
  }, [menuIsOpen, location]);

  return (
    <>
      <Header menuIsOpen={menuIsOpen}/>
      <main >
        <Outlet />
      </main>
      {!menuIsOpen && <Footer/>}
    </>
  );
};

export default Layout;