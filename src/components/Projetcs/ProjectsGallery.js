import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "./ProjectsGallery.scss";

const DUMMY_PROJECTS = [
  { id: "p1", name: "Project 1", status: "in-progress" },
  { id: "p2", name: "Project 2", status: "completed" },
  { id: "p3", name: "Project 3", status: "completed" },
  { id: "p4", name: "Project 4", status: "completed" },
];

const ProjectsGallery = () => {
  const [searchParams] = useSearchParams();

  const filterParam = searchParams.get("filter");

  let projects;
  let filteredProjects;

  if (filterParam && filterParam === "all") {
    filteredProjects = DUMMY_PROJECTS
  } else {
    filteredProjects = DUMMY_PROJECTS.filter((item) => item.status === filterParam);
  }

  projects = filteredProjects.map((item) => <li key={item.id}>{item.name}</li>);

  return <section>{projects}</section>;
};

export default ProjectsGallery;
