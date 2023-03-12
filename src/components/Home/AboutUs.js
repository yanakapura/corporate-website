import {Link} from 'react-router-dom'

import "./AboutUs.scss";

import img from "../../lib/img2.jpg";
import AboutUsList from "./AboutUsList";

const AboutUs = () => {
  return (
    <section className="about-us">
      <h2>
        В архитектурной мастерской работают дипломированные специалисты:
        архитекторы, дизайнеры, конструкторы, инженеры, имеющие богатый опыт
        работ.
      </h2>
      <div className="about-us__image">
        <img src={img} />
      </div>
      <div className="about-us__content">
        <p>
          Компания ООО «Геоэкопроект» начало свою работу в сфере инженерных
          изысканий в 2010 г. В основном деятельность компании заключается в
          проведении инженерно-геологических изысканий.
        </p>
        <p>
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
