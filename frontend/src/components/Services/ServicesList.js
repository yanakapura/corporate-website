import { Link, useLocation, useParams } from "react-router-dom";
import ServiceDetail from "./ServiceDetail";
import "./ServicesList.scss";

const DUMMY_SERVICIES = [
  {
    id: "s1",
    name: "tehnicheskoe-zadanie-na-proektirovanie",
    title: "Техническое задание на проектирование",
    text: `<p>Техническое задание на проектирование – это документ, в котором излагаются требования заказчика к плану, архитектуре и инженерным решениям. В нем прописывается план, стоимость строительства, технические условия и ограничения при планировании стройки на земельном участке.</p>
    <p>Техническое задание служит для определения конечного результата и поставленных целей в проекте. Это завершающий этап перед утверждением с заказчиком.</p>
    <p>Основная его цель четко изложить состав предварительных работ и плана. Пренебрегать важности технического задания не стоит. Около половины проблем в планировании связаны с неотчётливыми целями и неправильно составленным техническим заданием. Успех реализации проекта зависит от четкого ТЗ. Данный документ позволяет на каждом этапе строительства определять эффективность реализации проекта.</p>`,
  },
  {
    id: "s2",
    name: "sostav-proektnoj-dokumentacii",
    title: "Состав проектной документации",
    text: "",
  },
  {
    id: "s3",
    name: "razrabotka-otdelnyh-smet",
    title: "Разработка отдельных смет",
    text: "",
  },
  {
    id: "s4",
    name: "razrabotka-sanitarno-zashitnoj-zony-predpriyatiya",
    title: "Разработка санитарно-защитной зоны предприятия",
    text: "",
  },
  {
    id: "s5",
    name: "korrektirovka-proektno-smetnoj-dokumentacii",
    title: "Корректировка проектно-сметной документации",
    text: "",
  },
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
