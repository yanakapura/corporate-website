import { useEffect, useState } from "react";
import { loadProjectDetail, loadProjects } from "../lib/api";

const useProjectDetailLoader = (id) => {
  const [loading, setLoading] = useState(true);
  const [projectDetail, setProjectDetail] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function getProjectsData() {
      const projectsData = await loadProjects();

      if (projectsData) {
        setProjects(projectsData);

        return true;
      }
    }
    async function getSingleProjectsData(id) {
      const projectData = await loadProjectDetail(id);

      if (projectData) {
        setProjectDetail(projectData);

        return true
      }
    }

    const projectsData = getProjectsData();
    const projectDetailData = getSingleProjectsData(id);

    if (projectsData && projectDetailData) {
      setLoading(false)
    }
    
  }, []);

  return {
    loading,
    projects,
    projectDetail
  };
};

export default useProjectDetailLoader;
