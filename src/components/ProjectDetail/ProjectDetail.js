import GetInTouch from "../Home/GetInTouch";
import OtherProjects from "./OtherProjects";
import "./ProjectDetail.scss";
import ProjectDetailGallery from "./ProjectDetailGallery";

const ProjectDetail = () => {
  return (
    <>
      <section className="project-detail">
        <h1>Project Name</h1>
        <ProjectDetailGallery />
        <div className="project-detail__about about">
          <h2>
            В архитектурной мастерской работают дипломированные специалисты:
            архитекторы, дизайнеры, конструкторы, инженеры, имеющие богатый опыт
            работ.
          </h2>
          <div className="about__description">
            <table>
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Type</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2010-2015</td>
                  <td>Theater</td>
                  <td>Harbin</td>
                </tr>
              </tbody>
            </table>
            <p className="about__info">
              <span>Info</span>Some text about this project. Some text about
              this project. Some text about this project.Some text about this
              project. Some text about this project. Some text about this
              project.
            </p>
            <ul>
              <li>
                <p>Заказчик</p>
                <p>ООО "Заказчик"</p>
              </li>
              <li>
                <p>ГИП</p>
                <p>Иванов И.И.</p>
              </li>
              <li>
                <p>ГАП</p>
                <p>Петров П.П.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <OtherProjects />
      <GetInTouch />
    </>
  );
};

export default ProjectDetail;
