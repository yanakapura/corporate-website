import { useEffect } from 'react';
import { register } from 'swiper/element';
import './OtherProjects.scss'

const OtherProjects = () => {
    register();

  let swiperEl;
  useEffect(() => {
    swiperEl = document.querySelector(".project-detail__swiper-sub swiper-container");
  }, []);

  return (
    <div className='project-detail__swiper-sub'>
      <swiper-container
        slides-per-view="4"
        navigation="false"
        pagination="false"
        space-between="20"
        // centered-slides="true"
      >
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
      </swiper-container>
      {/* <button
        className="button-next"
        onClick={() => swiperEl.swiper.slideNext()}
      >
        n
      </button>
      <button
        className="button-prev"
        onClick={() => swiperEl.swiper.slidePrev()}
      >
        p
      </button> */}
    </div>
  );
};

export default OtherProjects;