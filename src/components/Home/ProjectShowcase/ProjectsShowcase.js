import { Link } from "react-router-dom";
import "./ProjectsShowcase.scss";
import ProjectsShowcaseGrid from "./ProjectsShowcaseGrid";
import ProjectsShowcaseList from "./ProjectsShowcaseList";

import img3 from "../../../lib/img3.jpg";

const ProjectsShowcase = () => {

  const projects = [
    {
      id: "the-project-1",
      name: "The Title",
      category: "office",
      year: 2020,
      place: "Los-Anjeles, California",
      image: img3
    },
    {
      id: "the-project-2",
      name: "The Title",
      category: "office",
      year: 2016,
      place: "Los-Anjeles, California",
      image: img3
    },
    {
      id: "the-project-3",
      name: "The Title",
      category: "office",
      year: 2017,
      place: "Los-Anjeles, California",
      image: img3
    },
    {
      id: "the-project-4",
      name: "The Title",
      category: "office",
      year: 2019,
      place: "Los-Anjeles, California",
      image: img3
    },
    {
      id: "the-project-5",
      name: "The Title",
      category: "office",
      year: 2015,
      place: "Los-Anjeles, California",
      image: img3
    },
    {
      id: "the-project-6",
      name: "The Title",
      category: "office",
      year: 2015,
      place: "Los-Anjeles, California",
      image: img3
    },
    {
      id: "the-project-7",
      name: "The Title",
      category: "office",
      year: 2015,
      place: "Los-Anjeles, California",
      image: img3
    },
  ];

  return (
    <section className="showcase">
      <div className="showcase__header">
        <h2>Наши работы</h2>
        <div className="showcase__header-link">
          <Link className="link" to='/projects'>
            [всего проектов]<span className="numbers">43</span>
          </Link>
        </div>
      </div>
      <ProjectsShowcaseGrid projects={projects}/>
      <ProjectsShowcaseList projects={projects}/>
      <Link className="link" to='/projects'>Все проекты</Link>
    </section>
  );
};

export default ProjectsShowcase;
