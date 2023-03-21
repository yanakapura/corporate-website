import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "./ProjectsGallery.scss";

const ProjectsGallery = (props) => {
  const [searchParams] = useSearchParams();
  const [otherProjects, setOtherProjects] = useState([]);
  const [clickNumber, setClickNumber] = useState(1);
  const [enableBtn, setEnableBtn] = useState(false);
  // const [changeImage, setCheangeImage] = useState(false);

  const filterParam = searchParams.get("filter");
  const layoutParam = searchParams.get("layout");

  let filteredProjects;
  if (filterParam && filterParam === "all") {
    filteredProjects = props.projects;
  } else {
    filteredProjects = props.projects.filter(
      (item) => item.category === filterParam
    );
  }

  let projectsArr = [];
  if (filteredProjects.length > 10) {
    for (let i = 0; i < Math.ceil(filteredProjects.length / 10); i++) {
      projectsArr[i] = filteredProjects.slice(i * 10, i * 10 + 10);
    }
  } else {
    projectsArr.push(filteredProjects);
  }

  const projects = projectsArr[0].map((item) => {
    return getli(item);
  });

  // function mouseHandler () {
  //   setCheangeImage(true)
  // }

  function getli(item) {
    if (layoutParam === "gallery") {
      return (
        <li key={item.id} className="projects-gallery__item project">
          <Link to={item.id}>
            <div className="project__image">
              <div className="project__image-wrapper">
                <img src={item.image[0]} />
              </div>
              <div className="project__image-wrapper">
                <img src={item.image[1] ? item.image[1] : item.image[0]} />
              </div>
            </div>
            <h3>{item.name}</h3>
          </Link>
        </li>
      );
    }
    if (layoutParam === "list") {
      return (
        <li key={item.id} className="projects-gallery__item project">
          <Link to={item.id}>
            <h4>{item.name}</h4>
            <p>{item.category}</p>
            <p>{item.id}</p>
          </Link>
        </li>
      );
    }
  }

  useEffect(() => {
    if (projectsArr[clickNumber]) {
      setEnableBtn(true);
    } else {
      setEnableBtn(false);
    }
  }, [searchParams, clickNumber]);

  useEffect(() => {
    setClickNumber(1);
    setOtherProjects([]);
  }, [searchParams]);

  const ulClasses = `projects-gallery__${
    layoutParam === "gallery" ? "grid" : "list"
  }`;

  const loadMoreHandler = () => {
    setClickNumber((state) => ++state);
    if (!projectsArr[clickNumber + 1]) {
      setEnableBtn(false);
    }
    setOtherProjects((state) => [
      ...state,
      <ul
        key={"projects-page-" + clickNumber}
        className={ulClasses}
        style={getGridStyling(projectsArr[clickNumber])}
      >
        {projectsArr[clickNumber].map((item) => {
          return getli(item);
        })}
      </ul>,
    ]);
  };

  function getGridStyling(projects) {
    if (layoutParam === "list") return null;

    let lines = 1;
    if (projects.length > 0 && projects.length <= 2) {
      lines = 1;
    }
    if (projects.length === 3) {
      lines = 2;
    }
    if (projects.length === 4 || projects.length === 5) {
      lines = 4;
    }
    if (projects.length === 6 || projects.length === 7) {
      lines = 6;
    }
    if (projects.length === 8) {
      lines = 8;
    }
    if (projects.length === 9 || projects.length === 10) {
      lines = 9;
    }
    return {
      gridTemplateRows: `repeat(${lines}, 1fr)`,
    };
  }

  return (
    <div className="projects-gallery">
      <ul>
        <ul
          className={ulClasses}
          style={getGridStyling(projects)}
          key={"projects-main"}
        >
          {projects}
        </ul>
        {otherProjects}
      </ul>
      {enableBtn && (
        <button
          className="projects-gallery__btn link"
          onClick={loadMoreHandler}
        >
          Загрузить еще +
        </button>
      )}
    </div>
  );
};

export default ProjectsGallery;
