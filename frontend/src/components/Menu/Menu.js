import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import Header from "../Header/Header";

import "./Menu.scss";

import img1 from "../../lib/img1.jpg";

const menuLinks = [
  { name: "Главная", image: img1, path: "/" },
  { name: "О нас", image: img1, path: "/about" },
  { name: "Услуги", image: img1, path: "/services" },
  { name: "Проекты", image: img1, path: "/projects" },
  { name: "Контакты", image: img1, path: "/contacts" },
];

const Menu = (props) => {
  const dispatch = useDispatch();

  const linkClickHandler = () => {
    dispatch(uiActions.setMenu({ menuIsOpen: false }));
  };

  const menuItems = menuLinks.map((item) => (
    <li key={item.name}>
      <div className="menu__image">
        <img src={item.image} />
      </div>
      <div className="menu__link">
        <Link to={item.path} replace onClick={linkClickHandler}>
          {item.name}
        </Link>
      </div>
    </li>
  ));

  return (
    <>
      <CSSTransition
        mountOnEnter
        unmountOnExit
        in={props.showMenu}
        timeout={500}
        classNames="menu"
      >
        <div className="menu">
          <Header showMenu={false} />
          <nav>
            <ul>{menuItems}</ul>
          </nav>
        </div>
      </CSSTransition>
    </>
  );
};

export default Menu;
