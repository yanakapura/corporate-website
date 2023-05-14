import "./OurTeam.scss";

import img from "../../lib/img2.jpg";

const teamMembers = [
  { id: "m1", name: "Sam Smith", image: img },
  { id: "m2", name: "Sam Smith", image: img },
  { id: "m3", name: "Sam Smith", image: img },
  { id: "m4", name: "Sam Smith", image: img },
  { id: "m5", name: "Sam Smith", image: img },
  { id: "m6", name: "Sam Smith", image: img },
];

const members = teamMembers.map((member) => (
  <div className="team__member" key={member.id}>
    <img src={member.image} />
  </div>
));

const OurTeam = () => {
  return (
    <section className="team">
      <h2>Наша команда</h2>
      {members}
    </section>
  );
};

export default OurTeam;
