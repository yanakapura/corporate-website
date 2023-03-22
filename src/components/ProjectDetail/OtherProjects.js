import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { register } from "swiper/element";
import { ArrowButtonNext, ArrowButtonPrev } from "../UI/ArrowButton";
import "./OtherProjects.scss";

const OtherProjects = (props) => {
  register();

  const swiperSubRef = useRef(null);

  const [btnIsEnabled, setBtnIsEnabled] = useState(true);
  const [slides1, setSlide1] = useState();
  const [slides2, setSlide2] = useState();

  const [width, setWidth] = useState(window.innerWidth);

  const updateDimensions = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    const swiperParams = {
      breakpoints: {
        1200: {
          simulateTouch: false,
          slidesPerView: 4,
          slidesPerGroup: 4,
        },
        900: {
          slidesPerView: 3,
        },
        640: {
          simulateTouch: true,
          slidesPerView: 2,
          slidesPerGroup: 1,
        },
      },
    };
    Object.assign(swiperSubRef.current, swiperParams);

    swiperSubRef.current.initialize();
  }, [swiperSubRef]);

  let projects1;
  let projects2;

  useEffect(() => {
    if ((props.projects.length === 4 && width > 1200) || props.projects.length < 4) {
      setBtnIsEnabled(false);
      setSlide1(getSlides(props.projects));
    }
    if (props.projects.length > 4) {
      const projectsNew = props.projects;
      const arrLength = props.projects.length;
      projectsNew.length = 6;
      projectsNew.fill({}, arrLength);
      projects1 = props.projects.slice(0, 3);
      projects2 = props.projects.slice(3);
      setSlide1(getSlides(projects1));
      setSlide2(getSlides(projects2));
    }
  }, [width, btnIsEnabled]);

  function getSlides(projects) {
    return projects
      ? projects.map((item) => {
          if (Object.keys(item)) {
            return (
              <swiper-slide key={Math.random()}>
                <Link to={"/projects/" + item.id}>
                  <img src={item.image ? item.image[0] : ""} />
                </Link>
              </swiper-slide>
            );
          }
        })
      : [];
  }

  return (
    <>
      <h2>Другие проекты</h2>
      <div className="project-detail__swiper-sub">
        <swiper-container
          ref={swiperSubRef}
          navigation="false"
          pagination="false"
          space-between="20"
        >
          {slides1}
          {width > 1200 && btnIsEnabled && (
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
    </>
  );
};

export default OtherProjects;
