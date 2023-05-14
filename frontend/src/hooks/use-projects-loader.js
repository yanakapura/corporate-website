import { useEffect, useState } from "react";
import { loadProjects } from "../lib/api";

const useProjectsLoader = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function getProjectsData() {
      const projectsData = await loadProjects();
      setProjects(projectsData);

      if (projectsData) {
        setLoading(false);
      }
    }

    getProjectsData();
  }, []);

  return {
    loading,
    projects,
  };
};

export default useProjectsLoader;
