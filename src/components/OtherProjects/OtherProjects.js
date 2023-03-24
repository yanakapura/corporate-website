import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { register } from "swiper/element";
import { ArrowButtonNext, ArrowButtonPrev } from "../UI/ArrowButton";
import "./OtherProjects.scss";

const OtherProjects = (props) => {
  register();

  const swiperSubRef = useRef(null);

  const [btnIsEnabled, setBtnIsEnabled] = useState(true);
  const [slides1, setSlides1] = useState();
  const [slides2, setSlides2] = useState();

  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    initSwiper(swiperSubRef.current);
  }, [swiperSubRef]);

  useEffect(() => {
    setSlides(props.projects);
  }, [windowSize]);

  function getWindowSize() {
    const { innerWidth } = window;
    return innerWidth;
  }

  function initSwiper(swiper) {
    const swiperParams = {
      observer: true,
      breakpoints: {
        1200: {
          simulateTouch: false,
          slidesPerView: 4,
          slidesPerGroup: 4,
        },
        900: {
          simulateTouch: true,
          slidesPerView: 3,
          slidesPerGroup: 1,
        },
        640: {
          simulateTouch: true,
          slidesPerView: 2,
          slidesPerGroup: 1,
        },
      },
    };
    Object.assign(swiper, swiperParams);

    swiper.initialize();
  }

  function setSlides(projects) {
    if (projects.length <= 4 || windowSize < 1200) {
      setSlides1(getSlides(projects));
      setSlides2([]);

      setBtnIsEnabled(false);

      swiperSubRef.current.swiper.update();
    }
    if (projects.length > 4 && windowSize > 1200) {
      const projectsCopy = [...projects];
      const projectsLength = projects.length;
      projectsCopy.length = 6;
      projectsCopy.fill({}, projectsLength);
      const projects1 = projectsCopy.slice(0, 3);
      const projects2 = projectsCopy.slice(3);
      setSlides1(getSlides(projects1));
      setSlides2(getSlides(projects2));

      setBtnIsEnabled(true);
    }
  }

  function getSlides(projects) {
    return projects.map((item) => {
      if (Object.keys(item)) {
        return (
          <swiper-slide key={item.id ? item.id : Math.random()}>
            <Link to={"/projects/" + item.id}>
              <img src={item.image ? item.image[0] : ""} />
            </Link>
          </swiper-slide>
        );
      }
    });
  }

  return (
    <section className="other-projects">
      <h2>{props.title}</h2>
      <div className="project-detail__swiper-sub">
        <swiper-container
          ref={swiperSubRef}
          navigation="false"
          pagination="false"
          space-between="20"
        >
          {slides1}
          {btnIsEnabled && (
            <>
              <swiper-slide>
                <ArrowButtonNext
                  onClick={() => swiperSubRef.current.swiper.slideNext()}
                >
                  Next
                </ArrowButtonNext>
              </swiper-slide>
              <swiper-slide>
                <ArrowButtonPrev
                  onClick={() => swiperSubRef.current.swiper.slidePrev()}
                >
                  Back
                </ArrowButtonPrev>
              </swiper-slide>
            </>
          )}
          {slides2}
        </swiper-container>
      </div>
    </section>
  );
};

export default OtherProjects;
