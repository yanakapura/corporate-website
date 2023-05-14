import { useSelector } from "react-redux";
import { defer, useLoaderData, useParams } from "react-router-dom";
import { loadProjectDetail, loadProjects } from "../../lib/api";
import GetInTouch from "../Home/GetInTouch";
import OtherProjects from "../OtherProjects/OtherProjects";
import "./ProjectDetail.scss";
import ProjectDetailGallery from "./ProjectDetailGallery";
import ProjectDetailList from "./ProjectDetailList";
import ProjectDetailTable from "./ProjectDetailTable";

const ProjectDetail = (props) => {

  const project = props.project
  const projects = props.projects

  const otherProjects = projects.filter(
    (item) => item.category === project.category && item.id !== project.id
  );

  return (
    <>
      <section className="project-detail page-header">
        <h1>{project.name}</h1>
        <ProjectDetailGallery images={project.image} />
        <div className="project-detail__about about">
          <p className="heading">
            В архитектурной мастерской работают дипломированные специалисты:
            архитекторы, дизайнеры, конструкторы, инженеры, имеющие богатый опыт
            работ.
          </p>
          <div className="about__description">
            <ProjectDetailTable project={{}} />
            <p className="about__info">
              <span>Info</span>Some text about this project. Some text about
              this project. Some text about this project.Some text about this
              project. Some text about this project. Some text about this
              project.
            </p>
            <ProjectDetailList project={{}} />
          </div>
        </div>
      </section>
      {otherProjects.length > 0 && (
        <OtherProjects projects={otherProjects} title="Другие проекты" />
      )}
      <GetInTouch />
    </>
  );
};

export default ProjectDetail;

// export async function loader({ params }) {
//   const id = params.id;

//   return defer({
//     project: await loadProjectDetail(id),
//     projects: await loadProjects()
//   });
// }
