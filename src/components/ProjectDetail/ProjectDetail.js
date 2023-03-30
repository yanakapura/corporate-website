import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import GetInTouch from "../Home/GetInTouch";
import OtherProjects from "../OtherProjects/OtherProjects";
import "./ProjectDetail.scss";
import ProjectDetailGallery from "./ProjectDetailGallery";



const ProjectDetail = () => {
  const projects = useSelector(state=>state.projects.projects)
  const { id } = useParams();

  console.log(projects);

  const project = projects.find((item) => item.id === id);
  const otherProjects = projects.filter(
    (item) => item.category === project.category && item.id !== project.id
  );

  return (
    <>
      <section className="project-detail">
        <h1>{project.name}</h1>
        <ProjectDetailGallery images={project.image} />
        <div className="project-detail__about about">
          <p className="heading">
            В архитектурной мастерской работают дипломированные специалисты:
            архитекторы, дизайнеры, конструкторы, инженеры, имеющие богатый опыт
            работ.
          </p>
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
                <div>
                  <p>Заказчик</p>
                  <p>ООО "Заказчик"</p>
                </div>
              </li>
              <li>
                <div>
                  <p>ГИП</p>
                  <p>Иванов И.И.</p>
                </div>
              </li>
              <li>
                <div>
                  <p>ГАП</p>
                  <p>Петров П.П.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {otherProjects.length > 0 && (
        // <section className="other-projects">
        //   <h2>Другие проекты</h2>
          <OtherProjects projects={otherProjects} title='Другие проекты'/>
        // </section>
      )}
      <GetInTouch />
    </>
  );
};

export default ProjectDetail;
