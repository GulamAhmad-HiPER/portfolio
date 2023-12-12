import Card from "../../components/Card/Card";
import Imganimation from "../../components/Imganimation/Imganimation";
import style from "./Project.module.css";
import img1 from "../../assets/philomatheon.png";
import img2 from "../../assets/htmleditor.png";
import img3 from "../../assets/taskmanager.png";
import img4 from "../../assets/weatherapp.png";
import { useState } from "react";

const Projects = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleHover = (index) => {
    setHoveredItem(index);
  };

  const handleLeave = () => {
    setHoveredItem(null);
  };

  return (
    <section id="project" className={style.project}>
      <div className={style.project_container}>
        <h1 className="primary-fs">
          <Imganimation text="My Work" singleline={true} speed={30} />
        </h1>
        <ul className={style.project_list}>
          <li
            onMouseEnter={() => handleHover(0)}
            onMouseLeave={handleLeave}
            className={style.project_llistitems}
          >
            <Imganimation
              text="Philomatheon classes"
              singleline={true}
              speed={30}
              hover={true}
            />
          </li>
          <li
            onMouseEnter={() => handleHover(3)}
            onMouseLeave={handleLeave}
            className={style.project_llistitems}
          >
            <Imganimation
              text="Weather App"
              singleline={true}
              speed={30}
              hover={true}
            />
          </li>
          <li
            onMouseEnter={() => handleHover(1)}
            onMouseLeave={handleLeave}
            className={style.project_llistitems}
          >
            <Imganimation
              text="HTML Editor"
              singleline={true}
              speed={30}
              hover={true}
            />
          </li>
          <li
            onMouseEnter={() => handleHover(2)}
            onMouseLeave={handleLeave}
            className={style.project_llistitems}
          >
            <Imganimation
              text="Task Manager"
              singleline={true}
              speed={30}
              hover={true}
            />
          </li>
        </ul>
      </div>
      <div className={style.project_preview}>
        <Card
          image={img1}
          name="philomatheon"
          highlighted={hoveredItem === 0}
          link="https://philomathean.netlify.app/"
        />
        <Card
          image={img4}
          name="Wheater app"
          highlighted={hoveredItem === 3}
          link="https://weather5daysapp.netlify.app/"
        />
        <Card
          image={img2}
          name="HTML Editor"
          highlighted={hoveredItem === 1}
          link="https://gulamahmad.github.io/HTMLEditor.github.io/"
        />
        <Card
          image={img3}
          name="Task Manager"
          highlighted={hoveredItem === 2}
          link="https://taskmanagertodoreact.netlify.app/"
        />
      </div>
    </section>
  );
};

export default Projects;
