import { Link } from "react-router-dom";
import {useSelector} from 'react-redux'
import "./ProjectsShowcase.scss";
import ProjectsShowcaseGrid from "./ProjectsShowcaseGrid";
import ProjectsShowcaseList from "./ProjectsShowcaseList";



const ProjectsShowcase = () => {

  const projects = useSelector(state=>state.projects.projects)

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
