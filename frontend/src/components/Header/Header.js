import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { uiActions } from "../../store/ui-slice";

import "./Header.scss";

const Header = (props) => {
  const dispatch = useDispatch();

  const openMenu = () => {
    dispatch(uiActions.setMenu({ menuIsOpen: true }));
  };
  const closeMenu = () => {
    dispatch(uiActions.setMenu({ menuIsOpen: false }));
  };

  return (
    <header className="header">
      <div>{props.showMenu && <Link to="/projects">Проекты</Link>}</div>
      <div className="header__logo">
        <Link to="/">CM Проект</Link>
      </div>
      <div>
        {props.showMenu && (
          <button className="header__btn" onClick={openMenu}>
            Меню
          </button>
        )}
        {!props.showMenu && (
          <button onClick={closeMenu} className="header__btn">
            Закрыть
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
