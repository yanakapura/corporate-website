import AboutUs from '../components/Home/AboutUs/AboutUs';
import GetInTouch from '../components/Home/GetInTouch';
import Hero from '../components/Home/Hero';
import OurTeam from '../components/Home/OurTeam';
import ProjectsShowcase from '../components/Home/ProjectShowcase/ProjectsShowcase';
import Servicies from '../components/Home/Services';

const HomePage = () => {
  return (
    <>
      <Hero/>
      <AboutUs/>
      <ProjectsShowcase/>
      <OurTeam/>
      <Servicies/>
      <GetInTouch/>
    </>
  );
};

export default HomePage;
