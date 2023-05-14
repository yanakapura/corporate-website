import "./ProjectsSection.scss";
import ProjectsGallery from "./ProjectsGallery";
import ProjectsHeader from "./ProjectsHeader";


const ProjectsSection = (props) => {

  return (
    <section className="projects page-header">
      <ProjectsHeader />
      <ProjectsGallery projects={props.projects} />
    </section>
  );
};
export default ProjectsSection;

