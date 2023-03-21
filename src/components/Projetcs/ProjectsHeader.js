import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import RadioButton from "../UI/RadioBtn";
import "./ProjectsHeader.scss";

const ProjectsHeader = () => {
  const [searchParams] = useSearchParams();

  const [layoutSelected, setLayoutSelected] = useState("gallery");
  const [filterSelected, setFilterSelected] = useState("all");

  const navigate = useNavigate();

  useEffect(() => {
    const layout = searchParams.get("layout");
    const filter = searchParams.get("filter");

    const layoutIsOk = layout === 'list' || layout === 'gallery'
    const filterIsOk = filter === "all" || filter === 'residential' || filter === 'non-residential' || filter === 'industrial'

    if (layoutIsOk) {
        setLayoutSelected(layout);
    } else {
        setLayoutSelected("gallery");
    }

    if (filterIsOk) {
      setFilterSelected(filter)
    } else {
      setFilterSelected('all')
    }

  }, []);

  useEffect(() => {
    navigate("?layout=" + layoutSelected + "&filter=" + filterSelected);
  }, [layoutSelected, filterSelected]);

  const layout = [
    { value: "gallery", title: "Галерея" },
    { value: "list", title: "Список" },
  ];

  const layoutBtns = layout.map((item) => (
    <RadioButton
      key={item.value}
      name="layout"
      value={item.value}
      title={item.title}
      checked={layoutSelected}
      onChange={(e) => {
        setLayoutSelected(e.target.value);
      }}
    />
  ));

  const filter = [
    { value: "all", title: "Все" },
    { value: "residential", title: "Проектирование жилых зданий" },
    { value: "non-residential", title: "Проектирование нежилых объектов" },
    { value: "industrial", title: "Промышленное проектирование" },
    // { value: "in-progress", title: "В процессе" },
    // { value: "completed", title: "Законченные" },
  ];

  const filterBtns = filter.map((item) => (
    <li key={item.value}>
      <RadioButton
        name="filter"
        value={item.value}
        title={item.title}
        checked={filterSelected}
        onChange={(e) => {
          setFilterSelected(e.target.value);
        }}
      />
    </li>
  ));

  return (
    <div>
      <div className="projects__header">
        <h1>Проекты</h1>
        <div className="projects__output-type">{layoutBtns}</div>
      </div>
      <div className="projects__filter">
        <ul>{filterBtns}</ul>
      </div>
    </div>
  );
};

export default ProjectsHeader;
