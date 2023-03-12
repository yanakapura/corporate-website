import { Link } from "react-router-dom";
import "./Navigation.scss";

import img1 from "../../lib/img1.jpg";
import Header from "../Header/Header";

const menuLinks = [
    {name: 'Home', image: img1, path: '/'},
    {name: 'About', image: img1, path: '/about'},
    {name: 'Projects', image: img1, path: '/projects'},
    {name: 'Careers', image: img1, path: '/'},
    {name: 'Contact us', image: img1, path: '/'},
]

const menuItems = menuLinks.map(item=><li key={item.name}>
    <div className="menu__image">
      <img src={item.image} />
    </div>
    <div className="menu__link">
      <Link to={item.path}>{item.name}</Link>
    </div>
  </li>)

const Navigation = () => {
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
