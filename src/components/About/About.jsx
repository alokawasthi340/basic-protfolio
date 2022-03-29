import "./about.css";
import Award from "../../img/award.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I am an IT student who want is enthusiatic to learn new technology.
        </p>
        <p className="a-desc">
        I am learning the web devlopment for a long time. My code never has bugs, it just develops random unexpected features.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title"> Design work 2021</h4>
            <p className="a-award-desc">
              just to show my creativity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
