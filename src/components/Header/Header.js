import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./Header.scss";

const Header = () => {
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
    <header className="header">
      <div>
       {!menuIsOpen && <Link to="/projects">Progects</Link>}
      </div>
      <div className="header__logo">
        <Link to="/">CM Проект</Link>
      </div>
      <div>
        {!menuIsOpen && <Link to="/menu">Menu</Link>}
        {menuIsOpen && <Link to="/">Close</Link>}
        {/* <a >Menu</a> */}
      </div>
    </header>
  );
};

export default Header;
