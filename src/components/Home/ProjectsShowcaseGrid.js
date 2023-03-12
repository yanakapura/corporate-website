import { Link } from "react-router-dom";

import "./ProjectsShowcaseGrid.scss";

import img3 from "../../lib/img3.jpg";

const ProjectsShowcaseGrid = () => {
  const projects = [
    {
      id: "the-project-1",
      name: "the title",
      category: "office",
      year: 2014,
      place: "Los-Anjeles, California",
      image: img3
    },
    {
      id: "the-project-2",
      name: "the title",
      category: "office",
      year: 2014,
      place: "Los-Anjeles, California",
      image: img3
    },
    {
      id: "the-project-3",
      name: "the title",
      category: "office",
      year: 2014,
      place: "Los-Anjeles, California",
      image: img3
    },
  ];

  const gridItems = projects.map((item) => (
    <div className="grid__item" key={item.id}>
      <img src={item.image} />
      <div className="grid__info info">
        <Link to={`projects/${item.id}`}>
          <h3 className="info__title">
            {item.name}<span>[{item.category}]</span>
          </h3>
        </Link>
        <div className="info__sub">
          <p>{item.place}</p>
          <p>{item.year}</p>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="projects__grid grid">
      {gridItems}
    </div>
  );
};

export default ProjectsShowcaseGrid;
