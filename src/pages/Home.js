import AboutUs from "../components/Home/AboutUs/AboutUs";
import GetInTouch from "../components/Home/GetInTouch";
import Hero from "../components/Home/Hero";
import OurTeam from "../components/Home/OurTeam";
import ProjectsShowcase from "../components/Home/ProjectShowcase/ProjectsShowcase";
import ServicesList from "../components/Services/ServicesList";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <>
      <motion.div
        className="menu-wrapper"
        initial={{
          transform: "translateY(5%)",
          // backgroundColor: "red",
          transition: { duration: .7, timingFunction: "ease" },
        }}
        animate={{
          transform: "translateY(0)",
          // backgroundColor: "green",
          transition: { duration: 1, timingFunction: "ease" },
        }}
        exit={{
          transform: "translateY(-5%)",
          // backgroundColor: "pink",
          transition: { duration: .7, timingFunction: "ease" },
        }}
      >
        <Hero />
        <AboutUs />
        <ProjectsShowcase />
        <OurTeam />
        <ServicesList />
        <GetInTouch />
      </motion.div>
    </>
  );
};

export default HomePage;
