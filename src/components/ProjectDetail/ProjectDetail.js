import { useParams } from "react-router-dom";
import GetInTouch from "../Home/GetInTouch";
import OtherProjects from "../OtherProjects/OtherProjects";
import "./ProjectDetail.scss";
import ProjectDetailGallery from "./ProjectDetailGallery";

import img from "../../lib/img3.jpg";
import img2 from "../../lib/img1.jpg";

const DUMMY_PROJECTS = [
  {
    id: "p1",
    name: "Project 1",
    category: "non-residential",
    image: [img2, img2],
  },
  {
    id: "p2",
    name: "Project 2",
    category: "non-residential",
    image: [img, img2],
  },
  { id: "p3", name: "Project 3", category: "residential", image: [img] },
  {
    id: "p4",
    name: "Project 4",
    category: "non-residential",
    image: [img, img2],
  },
  { id: "p5", name: "Project 5", category: "industrial", image: [img, img2] },
  { id: "p6", name: "Project 6", category: "industrial", image: [img2, img2] },
  {
    id: "p7",
    name: "Project 7",
    category: "non-residential",
    image: [img, img2],
  },
  { id: "p8", name: "Project 8", category: "industrial", image: [img2, img2] },
  {
    id: "p9",
    name: "Project 9",
    category: "non-residential",
    image: [img2, img2],
  },
  {
    id: "p10",
    name: "Project 10",
    category: "non-residential",
    image: [img2, img2],
  },
  {
    id: "p11",
    name: "Project 11",
    category: "non-residential",
    image: [img, img2],
  },
  {
    id: "p12",
    name: "Project 12",
    category: "residential",
    image: [img2, img2],
  },
  {
    id: "p13",
    name: "Project 13",
    category: "non-residential",
    image: [img, img2],
  },
  {
    id: "p14",
    name: "Project 14",
    category: "residential",
    image: [img, img2],
  },
  {
    id: "p15",
    name: "Project 15",
    category: "residential",
    image: [img2, img2],
  },
  {
    id: "p16",
    name: "Project 16",
    category: "non-residential",
    image: [img, img2],
  },
  {
    id: "p17",
    name: "Project 17",
    category: "industrial",
    image: [img, img2],
  },
  {
    id: "p18",
    name: "Project 18",
    category: "non-residential",
    image: [img, img2],
  },
  {
    id: "p19",
    name: "Project 19",
    category: "residential",
    image: [img2, img2],
  },
  {
    id: "p20",
    name: "Project 20",
    category: "non-residential",
    image: [img, img2],
  },
  {
    id: "p21",
    name: "Project 21",
    category: "residential",
    image: [img, img2],
  },
  {
    id: "p22",
    name: "Project 22",
    category: "industrial",
    image: [img, img2],
  },
];

const ProjectDetail = () => {
  const { id } = useParams();

  const project = DUMMY_PROJECTS.find((item) => item.id === id);
  const otherProjects = DUMMY_PROJECTS.filter(
    (item) => item.category === project.category && item.id !== project.id
  );

  return (
    <>
      <section className="project-detail">
        <h1>{project.name}</h1>
        <ProjectDetailGallery images={project.image} />
        <div className="project-detail__about about">
          <p className="heading">
            В архитектурной мастерской работают дипломированные специалисты:
            архитекторы, дизайнеры, конструкторы, инженеры, имеющие богатый опыт
            работ.
          </p>
          <div className="about__description">
            <table>
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Type</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2010-2015</td>
                  <td>Theater</td>
                  <td>Harbin</td>
                </tr>
              </tbody>
            </table>
            <p className="about__info">
              <span>Info</span>Some text about this project. Some text about
              this project. Some text about this project.Some text about this
              project. Some text about this project. Some text about this
              project.
            </p>
            <ul>
              <li>
                <div>
                  <p>Заказчик</p>
                  <p>ООО "Заказчик"</p>
                </div>
              </li>
              <li>
                <div>
                  <p>ГИП</p>
                  <p>Иванов И.И.</p>
                </div>
              </li>
              <li>
                <div>
                  <p>ГАП</p>
                  <p>Петров П.П.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {otherProjects.length > 0 && (
        // <section className="other-projects">
        //   <h2>Другие проекты</h2>
          <OtherProjects projects={otherProjects} title='Другие проекты'/>
        // </section>
      )}
      <GetInTouch />
    </>
  );
};

export default ProjectDetail;
