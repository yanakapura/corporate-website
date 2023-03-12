import './Hero.scss'

import img1 from '../../lib/img1.jpg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__title">
        <h1>СМ ПРОЕКТ</h1>
        <p>Архитектурно-сторительное бюро</p>
      </div>
      <div className="hero__image">
        <img src={img1} />
      </div>
    </section>
  );
};

export default Hero;
