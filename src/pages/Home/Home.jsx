import Clock from "../../components/Clock/Clock";
import Imganimation from "../../components/Imganimation/Imganimation";
import style from "./Home.module.css";
const Home = () => {
  return (
    <section id="home" className={style.container}>
      <div className={style.content}>
        <div className={style.timer}>
          <Clock />
        </div>
        <p className={`primary-fs ${style.heading}`}>
          <Imganimation text="GULAM AHMAD" speed={50} singleline={true} />
        </p>
        <p className={`primary-fs ${style.heading}`}> &lt;Web Developer/&gt;</p>
        <p className={style.qoute}>
          Passionate web developer with a keen eye for creating sleek and
          responsive websites that blend cutting-edge technology with intuitive
          user experiences.
        </p>

        <div className={style.btn}>
          <button>Projects</button>
          <button>Resume</button>
        </div>
      </div>
      <div className={style.circle}>
        <Imganimation speed={30} />
      </div>
    </section>
  );
};

export default Home;
