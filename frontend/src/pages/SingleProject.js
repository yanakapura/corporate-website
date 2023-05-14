import ProjectDetail from "../components/ProjectDetail/ProjectDetail";
import { useParams } from "react-router-dom";
import Loading from "../components/UI/Loading";
import useProjectDetailLoader from "../hooks/use-project-detail-loader";

const SingleProject = () => {
  const { id } = useParams();
  const { loading, projects, projectDetail } = useProjectDetailLoader(id);

  return loading ? (
    <Loading />
  ) : (
    <ProjectDetail projects={projects} project={projectDetail} />
  );
};

export default SingleProject;
