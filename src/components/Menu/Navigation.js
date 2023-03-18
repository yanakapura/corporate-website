import { Link } from "react-router-dom";
import "./Navigation.scss";

import img1 from "../../lib/img1.jpg";
import Header from "../Header/Header";

const menuLinks = [
    {name: 'Главная', image: img1, path: '/'},
    {name: 'О нас', image: img1, path: '/about'},
    {name: 'Проекты', image: img1, path: '/projects'},
    {name: 'Вакансии', image: img1, path: '/careers'},
    {name: 'Контакты', image: img1, path: '/contacts'},
]


const Navigation = () => {

const menuItems = menuLinks.map(item=><li key={item.name}>
    <div className="menu__image">
      <img src={item.image} />
    </div>
    <div className="menu__link">
      <Link to={item.path} replace>{item.name}</Link>
    </div>
  </li>)

  return (
    <>
    {/* <Header/> */}
    <nav className="menu">
      <ul>
        {menuItems}
      </ul>
    </nav>
    </>
  );
};

export default Navigation;
