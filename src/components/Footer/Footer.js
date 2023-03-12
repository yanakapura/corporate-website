import { Link } from 'react-router-dom';
import './Footer.scss'

const Footer = () => {
    return <footer className='footer'>
        <Link to='/' className='footer__logo'>СМ проект</Link>
        <div className='footer__socials'>
            <a href='https://facebook.com' target="_blank">Facebook</a>
            <a href='https://instagram.com' target="_blank">Instagram</a>
        </div>
        <span>2023, Все права защищены</span>
    </footer>
};

export default Footer