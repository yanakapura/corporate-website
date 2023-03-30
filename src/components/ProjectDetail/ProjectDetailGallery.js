import "./ProjectDetailGallery.scss";
import { register } from "swiper/element/bundle";
import { useEffect, useRef, useState } from "react";


const ProjectDetailGallery = (props) => {
  register();

  const swiperElRef = useRef(null);

  const [isEnd, setIsEnd] = useState(false);
  const [isBeginning, setIsBeginning] = useState(false);

  useEffect(() => {
    swiperElRef.current.addEventListener("progress", (e) => {
      const [swiper] = e.detail;
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    });
  }, [swiperElRef]);

  const slides = props.images.map((image) => (
    <swiper-slide key={Math.random()}>
      <img src={image} />
    </swiper-slide>
  ));

  return (
    <div className="project-detail__swiper swiper">
      <swiper-container
        ref={swiperElRef}
        slides-per-view="1"
        navigation="false"
        pagination="false"
        space-between="20"
        centered-slides="true"
      >
        {slides}
      </swiper-container>
      <div className="swiper__buttons">
        <button
          className="button-next"
          onClick={() => swiperElRef.current.swiper.slideNext()}
          disabled={isEnd}
        />
        <button
          className="button-prev"
          onClick={() => swiperElRef.current.swiper.slidePrev()}
          disabled={isBeginning}
        />
      </div>
    </div>
  );
};

export default ProjectDetailGallery;
