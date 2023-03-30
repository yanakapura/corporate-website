import "./ProjectsSection.scss";
import ProjectsGallery from "./ProjectsGallery";
import ProjectsHeader from "./ProjectsHeader";
import {useSelector} from 'react-redux'


const ProjectsSection = () => {

  const projects = useSelector(state=>state.projects.projects)

  return (
    <section className="projects">
      <ProjectsHeader />
      <ProjectsGallery projects={projects} />
    </section>
  );
};
export default ProjectsSection;
