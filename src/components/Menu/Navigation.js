import { Link } from "react-router-dom";
import "./Navigation.scss";

import img1 from "../../lib/img1.jpg";

const menuLinks = [
    {name: 'Главная', image: img1, path: '/'},
    {name: 'О нас', image: img1, path: '/about'},
    {name: 'Услуги', image: img1, path: '/services'},
    {name: 'Проекты', image: img1, path: '/projects'},
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
    <nav className="menu">
      <ul>
        {menuItems}
      </ul>
    </nav>
    </>
  );
};

export default Navigation;
