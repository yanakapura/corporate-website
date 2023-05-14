import ProjectsSection from "../components/Projects/ProjectsSection";
import Loading from "../components/UI/Loading";
import useProjectsLoader from "../hooks/use-projects-loader";

const ProjectsPage = () => {

  const { loading, projects } = useProjectsLoader();

  return loading ? <Loading /> : <ProjectsSection projects={projects} />;
};

export default ProjectsPage;
