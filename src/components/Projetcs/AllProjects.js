import './AllProjects.scss'
import ProjectsGallery from './ProjectsGallery';
import ProjectsHeader from './ProjectsHeader';

const AllProjects = () => {
  return (
    <section className="projects">
      <ProjectsHeader />
      <ProjectsGallery />
    </section>
  );
};
export default AllProjects