import GetInTouch from "../components/Home/GetInTouch";
import ServicesList from "../components/Services/ServicesList";
import ServicesHeader from "../components/Services/ServicesHeader";
import OtherProjects from "../components/OtherProjects/OtherProjects";

import Loading from "../components/UI/Loading";
import useProjectsLoader from "../hooks/use-projects-loader";

const ServicesPage = () => {
  const { loading, projects } = useProjectsLoader();

  return loading ? (
    <Loading />
  ) : (
    <section className="services page-header">
      <ServicesHeader />
      <ServicesList />
      <OtherProjects title="Примеры работ" projects={projects} />
      <GetInTouch />
    </section>
  );
};

export default ServicesPage;
