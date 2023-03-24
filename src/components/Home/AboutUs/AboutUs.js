import {Link} from 'react-router-dom'

import "./AboutUs.scss";

import img from "../../../lib/img2.jpg";
import AboutUsList from "./AboutUsList";

const AboutUs = () => {
  return (
    <section className="about-us">
      <p className='heading'>
        В архитектурной мастерской работают дипломированные специалисты:
        архитекторы, дизайнеры, конструкторы, инженеры, имеющие богатый опыт
        работ.
      </p>
      <div className="about-us__image">
        <img src={img} />
      </div>
      <div className="about-us__content">
        <p className='content'>
          Компания ООО «Геоэкопроект» начало свою работу в сфере инженерных
          изысканий в 2010 г. В основном деятельность компании заключается в
          проведении инженерно-геологических изысканий.
        </p>
        <p className='content'>
          Все работы выполняются в соответствии с действующей нормативной
          документацией. Наша команда состоит исключительно из квалифицированных
          сотрудников, чей опыт работы в области инженерных изысканий
          насчитывает более 10-15 лет.
        </p>
      </div>
      <AboutUsList/>
      <Link to='/about' className='about-us__link link'>Узнать о нас больше</Link>
    </section>
  );
};

export default AboutUs;
