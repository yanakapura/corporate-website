import GetInTouch from "../components/Home/GetInTouch";
import ServicesList from "../components/Services/ServicesList";
import ServicesHeader from "../components/Services/ServicesHeader";
import OtherProjects from "../components/OtherProjects/OtherProjects";

import {useSelector} from 'react-redux'


const ServicesPage = () => {
  const projects = useSelector(state=>state.projects.projects)

  return (
    <section className="services">
      <ServicesHeader />
      <ServicesList />
      <OtherProjects title='Примеры работ' projects={projects}/>
      <GetInTouch />
    </section>
  );
};

export default ServicesPage;
