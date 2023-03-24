import OtherProjects from "../OtherProjects/OtherProjects";
import "./ServiceDetail.scss";

// import img from "../../lib/img3.jpg";
// import img2 from "../../lib/img1.jpg";

// const DUMMY_PROJECTS = [
//     {
//       id: "p1",
//       name: "Project 1",
//       category: "non-residential",
//       image: [img2, img2],
//     },
//     {
//       id: "p2",
//       name: "Project 2",
//       category: "non-residential",
//       image: [img, img2],
//     },
//     { id: "p3", name: "Project 3", category: "residential", image: [img] },
//     {
//       id: "p4",
//       name: "Project 4",
//       category: "non-residential",
//       image: [img, img2],
//     },
//     { id: "p5", name: "Project 5", category: "industrial", image: [img, img2] },
//     { id: "p6", name: "Project 6", category: "industrial", image: [img2, img2] },
//     {
//       id: "p7",
//       name: "Project 7",
//       category: "non-residential",
//       image: [img, img2],
//     },
//     { id: "p8", name: "Project 8", category: "industrial", image: [img2, img2] },
//     {
//       id: "p9",
//       name: "Project 9",
//       category: "non-residential",
//       image: [img2, img2],
//     },
//     {
//       id: "p10",
//       name: "Project 10",
//       category: "non-residential",
//       image: [img2, img2],
//     },
//     {
//       id: "p11",
//       name: "Project 11",
//       category: "non-residential",
//       image: [img, img2],
//     },
//     {
//       id: "p12",
//       name: "Project 12",
//       category: "residential",
//       image: [img2, img2],
//     },
//     {
//       id: "p13",
//       name: "Project 13",
//       category: "non-residential",
//       image: [img, img2],
//     },
//     {
//       id: "p14",
//       name: "Project 14",
//       category: "residential",
//       image: [img, img2],
//     },
//     {
//       id: "p15",
//       name: "Project 15",
//       category: "residential",
//       image: [img2, img2],
//     },
//     {
//       id: "p16",
//       name: "Project 16",
//       category: "non-residential",
//       image: [img, img2],
//     },
//     {
//       id: "p17",
//       name: "Project 17",
//       category: "industrial",
//       image: [img, img2],
//     },
//     {
//       id: "p18",
//       name: "Project 18",
//       category: "non-residential",
//       image: [img, img2],
//     },
//     {
//       id: "p19",
//       name: "Project 19",
//       category: "residential",
//       image: [img2, img2],
//     },
//     {
//       id: "p20",
//       name: "Project 20",
//       category: "non-residential",
//       image: [img, img2],
//     },
//     {
//       id: "p21",
//       name: "Project 21",
//       category: "residential",
//       image: [img, img2],
//     },
//     {
//       id: "p22",
//       name: "Project 22",
//       category: "industrial",
//       image: [img, img2],
//     },
//   ];

const ServiceDetail = (props) => {
  return (
    <div className="service-detail">
      <div className="service-detail__info">
        <p>
          Архитектурное проектирование зданий и сооружений – одно из ключевых
          направлений деятельности проектной организации proektby.pro.
          Архитектурное проектирование является одним из первых этапов при
          строительстве любого объекта. От того, насколько грамотно и
          профессионально оно выполнено, зависит не только внешний облик
          строения, но и удобство и экономичность его эксплуатации. Поэтому эту
          работу следует доверять только высококвалифицированным специалистам.
        </p>
        <h3>АРХИТЕКТУРНОЕ ПРОЕКТИРОВАНИЕ В МИНСКЕ И БЕЛАРУСИ</h3>
        <p>
          Эффективное архитектурное проектирование зданий и сооружений в Минске
          и Беларуси возможно лишь при грамотном выполнении всех его этапов.
          Наши специалисты детально прорабатывают каждый из них – от анализа
          первичной информации об объекте и подготовки технического задания,
          подготовки эскизов до создания рабочего проекта и авторского надзора
          за строительством.{" "}
        </p>
        <p>
          Архитектурное бюро proektby.pro – это высококвалифицированные
          архитекторы-проектировщики с солидным практическим опытом, способные
          реализовать проекты любой сложности. Заказав архитектурное
          проектирование зданий и сооружений в нашей компании, Вы получите
          проект, полностью отвечающий Вашим пожеланиям, строительным
          требованиям и нормам законодательства.
        </p>
        <h3>УСЛУГИ АРХИТЕКТУРНОГО ПРОЕКТИРОВАНИЯ</h3>
        <p>
          Проектная организация proektby.pro предлагает услуги архитектурного
          проектирования общественных зданий и сооружений, загородных домов,
          коттеджей, бизнес-центров, торговых объектов, офисов и других строений
          любой сложности. Мы поможем определить архитектурный стиль с учетом
          индивидуальных предпочтений заказчика и выполнить разработку проекта в
          минимальный срок.
        </p>
        <p>
          В процессе разработки внешнего облика здания и его внутренней
          планировки наши специалисты учитывают требования строительных норм и
          правил и существующие нормативные акты. Архитектурный проект включает
          в себя:
        </p>
      </div>
      {/* <div className="service-detail__examples">
            <h3>Примеры работ</h3>
            <OtherProjects projects={DUMMY_PROJECTS}/>
        </div> */}
    </div>
  );
};

export default ServiceDetail;
