import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { uiActions } from "../../store/ui-slice";

import "./Header.scss";

const Header = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const menuIsOpen = useSelector(state=>state.ui.menuIsVisible)

  const openMenu = () => {
    dispatch(uiActions.setMenu({menuIsVisible: true}))
    console.log(menuIsOpen);
  }
  
  const closeMenu = () => {
    dispatch(uiActions.setMenu({menuIsVisible: false}))
    console.log(menuIsOpen);
  }

  return (
    <header className="header">
      <div>{!props.menuIsOpen && <Link to="/projects" >Проекты</Link>}</div>
      <div className="header__logo">
        <Link to="/">CM Проект</Link>
      </div>
      <div>
        {/* {!props.menuIsOpen && <Link to="/menu">Меню</Link>} */}
        {props.showMenu && <button className="header__btn" onClick={openMenu}>Менб</button>}
        {!props.showMenu && (
          <button onClick={closeMenu} className="header__btn">Закрыть</button>
        )}
        {/* {props.menuIsOpen && (
          <button onClick={() => navigate(-1)} className="header__btn">Закрыть</button>
        )} */}
      </div>
    </header>
  );
};

export default Header;
