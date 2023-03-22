import "./ProjectsSection.scss";
import ProjectsGallery from "./ProjectsGallery";
import ProjectsHeader from "./ProjectsHeader";

import img from "../../lib/img1.jpg";
import img2 from '../../lib/img3.jpg'

const DUMMY_PROJECTS = [
  { id: "p1", name: "Project 1", category: "non-residential", image: [img2, img2] },
  { id: "p2", name: "Project 2", category: "non-residential", image: [img, img2] },
  { id: "p3", name: "Project 3", category: "residential", image: [img] },
  { id: "p4", name: "Project 4", category: "non-residential", image: [img, img2] },
  { id: "p5", name: "Project 5", category: "industrial", image: [img, img2] },
  { id: "p6", name: "Project 6", category: "industrial", image: [img2, img2] },
  { id: "p7", name: "Project 7", category: "non-residential", image: [img, img2] },
  { id: "p8", name: "Project 8", category: "industrial", image: [img2, img2] },
  { id: "p9", name: "Project 9", category: "non-residential", image: [img2, img2] },
  { id: "p10", name: "Project 10", category: "non-residential", image: [img2, img2] },
  { id: "p11", name: "Project 11", category: "non-residential", image: [img, img2] },
  { id: "p12", name: "Project 12", category: "residential", image: [img2, img2] },
  { id: "p13", name: "Project 13", category: "non-residential", image: [img, img2] },
  { id: "p14", name: "Project 14", category: "residential", image: [img, img2] },
  { id: "p15", name: "Project 15", category: "residential", image: [img2, img2] },
  { id: "p16", name: "Project 16", category: "non-residential", image: [img, img2] },
  { id: "p17", name: "Project 17", category: "non-residential", image: [img, img2] },
  { id: "p18", name: "Project 18", category: "non-residential", image: [img, img2] },
  { id: "p19", name: "Project 19", category: "residential", image: [img2, img2] },
  { id: "p20", name: "Project 20", category: "non-residential", image: [img, img2] },
  { id: "p21", name: "Project 21", category: "residential", image: [img, img2] },
  { id: "p22", name: "Project 22", category: "non-residential", image: [img, img2] },
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
