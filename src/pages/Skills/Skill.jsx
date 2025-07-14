import Imganimation from "../../components/Imganimation/Imganimation";
import style from "./Skill.module.css";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiDjango } from "react-icons/si";
// import CounterAnimation from "../../components/Counter/CounterAnimation";

const Skill = () => {
  return (
    <section id="skill" className={style.skill}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className={style.skill_container}>
          <h1 className="primary-fs">
            <Imganimation
              text="Skills & Expertise"
              singleline={true}
              speed={30}
            />
          </h1>
          <p>
            Frontend Developer @HiPER Automotive (Jan-24)
            <br />
            <br />
            My main area of expertise is frontend development, where I’ve worked
            extensively with React, TypeScript, Tailwind CSS, and Material UI to
            build responsive and scalable web applications.
            <br />
            <br />
            I’ve integrated both internal and third-party APIs, including
            OpenWeatherMap, Firebase Auth, and location-based services, handling
            authentication, data visualization, and dynamic dashboard
            interactions.
            <br />
            <br />
            I containerized internal web apps using Docker, which significantly
            improved the deployment process and reduced delivery time by over
            20%.
            <br />
            <br />
            I also have experience deploying applications on AWS—using S3 for
            static hosting and CloudFront for global content delivery—ensuring
            high performance and availability.
            <br />
            <br />
            In addition, I have full-stack development experience through
            freelance work, where I built complete solutions using Node.js,
            Express, and MySQL alongside the frontend.
          </p>
        </div>
      </div>
      <div className={style.skill_view}>
        <div>
          <FaReact></FaReact>
          {/* <CounterAnimation start={0} end={80} duration={1500} /> */}
        </div>
        <div>
          <FaNodeJs></FaNodeJs>
          {/* <CounterAnimation start={0} end={80} duration={1500} /> */}
        </div>
        <div>
          <SiRedux></SiRedux>
          {/* <CounterAnimation start={0} end={70} duration={1500} /> */}
        </div>

        <div>
          <SiExpress></SiExpress>
          {/* <CounterAnimation start={0} end={70} duration={1500} /> */}
        </div>
        <div>
          <SiMysql></SiMysql>
          {/* <CounterAnimation start={0} end={90} duration={1500} /> */}
        </div>

        <div>
          <SiDjango></SiDjango>
          {/* <CounterAnimation start={0} end={60} duration={1500} /> */}
        </div>
      </div>
    </section>
  );
};

export default Skill;
