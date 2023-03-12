import './AboutUsList.scss'

const AboutUsList = () => {
  return (
    <div className="about-us__list">
      <ul>
        <li>
          <div>
            <span className='numbers'>20</span>
            <p>Законченных проектов</p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              quis urna at risus convallis efficitur sed consectetur arcu.{" "}
            </p>
          </div>
        </li>
        <li>
          <div>
            <span  className='numbers'>18</span>
            <p>Лет опыта</p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci
              varius natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus.{" "}
            </p>
          </div>
        </li>
        <li>
          <div>
            <span  className='numbers'>50</span>
            <p>Полученных наград</p>
          </div>
          <div>
            <p>
              Pellentesque facilisis volutpat tellus, non tincidunt enim
              facilisis iaculis. Donec vitae interdum neque. Vivamus at nisi
              placerat, vulputate justo nec, blandit ex.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default AboutUsList;
