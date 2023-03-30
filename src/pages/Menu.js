import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import Navigation from "../components/Menu/Navigation";
import { motion } from "framer-motion";

const MenuPage = () => {
  const menuIsOpen = useSelector((state) => state.ui.menuIsVisible);
  return (
    <>
      {/* <CSSTransition
        mountOnEnter
        unmountOnExit
        in={menuIsOpen}
        timeout={500}
        classNames="menu"
      > */}
      {/* <motion.div
        className="menu-wrapper"
        initial={{
            transform: "translateY(100%)",
            backgroundColor: "red",
            transition: { duration: .5, timingFunction: 'ease' },
          }}
          animate={{
            transform: "translateY(0)",
            backgroundColor: "red",
            transition: { duration: .5, timingFunction: 'ease' },
          }}
          exit={{
            transform: "translateY(100%)",
            backgroundColor: "black",
            transition: { duration: .5, timingFunction: 'ease' },
          }}
      > */}
        <Navigation />
      {/* </motion.div> */}
      {/* </CSSTransition> */}
    </>
  );
};

export default MenuPage;
