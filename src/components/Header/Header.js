import { Link, useNavigate } from "react-router-dom";

import "./Header.scss";

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div>{!props.menuIsOpen && <Link to="/projects" >Проекты</Link>}</div>
      <div className="header__logo">
        <Link to="/">CM Проект</Link>
      </div>
      <div>
        {!props.menuIsOpen && <Link to="/menu">Меню</Link>}
        {props.menuIsOpen && (
          <button onClick={() => navigate(-1)} className="header__btn">Закрыть</button>
        )}
      </div>
    </header>
  );
};

export default Header;
