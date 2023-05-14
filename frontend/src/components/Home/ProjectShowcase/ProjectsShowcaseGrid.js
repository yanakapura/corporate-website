import { Link } from "react-router-dom";

import "./ProjectsShowcaseGrid.scss";

const ProjectsShowcaseGrid = (props) => {
  const topProjects = props.projects.slice(0, 3);

  const gridItems = topProjects.map((item) => (
    <div className="grid__item" key={item.id}>
      <Link to={`projects/${item.id}`}>
        <img src={item.image[0]} />
        <div className="grid__info info">
          <h3 className="info__title">
            {item.name}
            <span>[{item.category}]</span>
          </h3>
          <div className="info__sub">
            <p>{item.place}</p>
            <p>{item.year}</p>
          </div>
        </div>
      </Link>
    </div>
  ));

  return <div className="projects__grid grid">{gridItems}</div>;
};

export default ProjectsShowcaseGrid;
