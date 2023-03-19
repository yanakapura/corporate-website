import "./ProjectsSection.scss";
import ProjectsGallery from "./ProjectsGallery";
import ProjectsHeader from "./ProjectsHeader";

import img from "../../lib/img1.jpg";

const DUMMY_PROJECTS = [
  { id: "p1", name: "Project 1", status: "in-progress", image: img },
  { id: "p2", name: "Project 2", status: "completed", image: img },
  { id: "p3", name: "Project 3", status: "completed", image: img },
  { id: "p4", name: "Project 4", status: "completed", image: img },
  { id: "p5", name: "Project 5", status: "in-progress", image: img },
  { id: "p6", name: "Project 6", status: "completed", image: img },
  { id: "p7", name: "Project 7", status: "completed", image: img },
  { id: "p8", name: "Project 8", status: "completed", image: img },
  { id: "p9", name: "Project 9", status: "in-progress", image: img },
  { id: "p10", name: "Project 10", status: "completed", image: img },
  { id: "p11", name: "Project 11", status: "completed", image: img },
  { id: "p12", name: "Project 12", status: "completed", image: img },
  { id: "p13", name: "Project 13", status: "completed", image: img },
  { id: "p14", name: "Project 14", status: "in-progress", image: img },
  { id: "p15", name: "Project 15", status: "completed", image: img },
  { id: "p16", name: "Project 16", status: "completed", image: img },
  { id: "p17", name: "Project 17", status: "completed", image: img },
  { id: "p18", name: "Project 18", status: "completed", image: img },
  { id: "p19", name: "Project 19", status: "in-progress", image: img },
  { id: "p20", name: "Project 20", status: "completed", image: img },
  { id: "p21", name: "Project 21", status: "completed", image: img },
  { id: "p22", name: "Project 22", status: "completed", image: img },
];

const ProjectsSection = () => {
  return (
    <section className="projects">
      <ProjectsHeader />
      <ProjectsGallery projects={DUMMY_PROJECTS} />
    </section>
  );
};
export default ProjectsSection;
