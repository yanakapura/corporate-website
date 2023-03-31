import { Link, useLocation, useParams } from "react-router-dom";
import ServiceDetail from "./ServiceDetail";
import "./ServicesList.scss";

const DUMMY_SERVICIES = [
  {
    id: "s1",
    name: "arhitekturnoe-proektirovanie",
    title: "Архитектурное проектирование",
  },
  {
    id: "s2",
    name: "stroitelnoe-proektirovanie-i-konstruirovanie",
    title: "Строительное проектирование и конструирование",
  },
  {
    id: "s3",
    name: "proektirovanie-inzhenernyh-setej",
    title: "Проектирование инженерных сетей",
  },
  {
    id: "s4",
    name: "soglasovanie-proektnoj-dokumentacii",
    title:
      "Согласование проектной документации во всех необходимых инстанциях (УГЭ, СЭС)",
  },
  { id: "s5", name: "pereplanirovka", title: "Перепланировки" },
];

const ServicesList = () => {
  const { id } = useParams();
  const prevRoute = useLocation();

  const services = DUMMY_SERVICIES.map((item, index) => (
    // <CSSTransition key={index} classNames="list-item" timeout={500}>
    <li
      key={item.id}
      className={id && (id === item.name ? "active" : "passive")}
    >
      <Link
        to={id === item.name ? "/services" : `/services/${item.name}`}
        state={{ prevRoute }}
      >
        {item.title}
      </Link>
      <ServiceDetail service={item} show={id === item.name} />
    </li>
  ));

  return (
    <section className="services__list">
      <h2>Услуги</h2>
      <ul>{services}</ul>
    </section>
  );
};

export default ServicesList;
