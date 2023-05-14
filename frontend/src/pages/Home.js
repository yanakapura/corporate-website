import AboutUs from "../components/Home/AboutUs/AboutUs";
import GetInTouch from "../components/Home/GetInTouch";
import Hero from "../components/Home/Hero";
import OurTeam from "../components/Home/OurTeam";
import ProjectsShowcase from "../components/Home/ProjectShowcase/ProjectsShowcase";
import ServicesList from "../components/Services/ServicesList";
import useProjectsLoader from "../hooks/use-projects-loader";
import Loading from "../components/UI/Loading";

const HomePage = () => {

  const { loading, projects } = useProjectsLoader();

  return loading ? (
    <Loading />
  ) : (
    <>
      <Hero />
      <AboutUs />
      <ProjectsShowcase projects={projects} />
      <OurTeam />
      <ServicesList />
      <GetInTouch />
    </>
  );
};

export default HomePage;
