import { IoHomeSharp } from "react-icons/io5";
import { GoProjectRoadmap } from "react-icons/go";
import { MdContactPage } from "react-icons/md";
import style from "./Menu.module.css";
import { useState } from "react";
const Menu = () => {
  const [active, setActive] = useState({
    home: true,
    project: false,
    contact: false,
  });

  function handleChange(value) {
    setActive((prevActive) => {
      const newActive = { ...prevActive };
  
      // Set all values to false
      Object.keys(newActive).forEach(key => {
        newActive[key] = false;
      });
  
      // Set the clicked value to true
      newActive[value] = true;
  
      return newActive;
    });
  }

  return (
    <div className={style.menu}>
      <ul>
        <li
          title="home"
          className={active.home ? style.active : ""}
          onClick={() => handleChange("home")}
        >
          <IoHomeSharp />
        </li>
        <li
          title="Projects"
          className={active.project ? style.active : ""}
          onClick={() => handleChange("project")}
        >
          <GoProjectRoadmap />
        </li>
        <li
          title="contact"
          className={active.contact ? style.active : ""}
          onClick={() => handleChange("contact")}
        >
          <MdContactPage />
        </li>
      </ul>
    </div>
  );
};

export default Menu;
