import { Link } from "react-router-dom";
import "./ProjectsShowcase.scss";
import ProjectsShowcaseGrid from "./ProjectsShowcaseGrid";

const ProjectsShowcase = () => {
  return (
    <section>
      <div className="projects__header">
        <h2>Selected works</h2>
        <div className="projects__header-link">
          <Link className="link" to='/projects'>
            [Projetcs]<span className="numbers">43</span>
          </Link>
        </div>
      </div>
      <ProjectsShowcaseGrid/>
    </section>
  );
};

export default ProjectsShowcase;
