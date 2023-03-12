import { Link } from "react-router-dom";
import "./ProjectsShowcaseList.scss";

const ProjectsShowcaseList = (props) => {
  const otherProjects = props.projects.slice(3);

  const projectItems = otherProjects.map((item) => (
    <li key={item.id}>
      <Link to={`/projects/${item.id}`}>
        <p>{item.name}</p>
        <span>{item.year}</span>
      </Link>
    </li>
  ));

  return (
    <div className="projects__list">
      <ul>{projectItems}</ul>
    </div>
  );
};

export default ProjectsShowcaseList;
