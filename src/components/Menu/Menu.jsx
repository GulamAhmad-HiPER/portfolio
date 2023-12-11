import { IoHomeSharp } from "react-icons/io5";
import { GoProjectRoadmap } from "react-icons/go";
import { MdContactPage } from "react-icons/md";
import { GiBrain } from "react-icons/gi";
import style from "./Menu.module.css";
import { useEffect, useState } from "react";

const Menu = () => {
  const [active, setActive] = useState({
    home: true,
    project: false,
    contact: false,
    skill:false,
  });

  useEffect(() => {
    const handleScroll = () => {
      const homeElement = document.getElementById("home");
      // const projectElement = document.getElementById("project");
      // const contactElement = document.getElementById("contact");
      const skillElement = document.getElementById("skill") 
      
      const scrollPosition = window.scrollY;

      if (
        homeElement &&
        scrollPosition >= homeElement?.offsetTop &&
        scrollPosition < skillElement?.offsetTop /2
      ) {
        setActive({
          home: true,
          project: false,
          contact: false,
          skill:false,
        });
      } else if (
        skillElement &&
        scrollPosition >= skillElement.offsetTop /2
      ) {
        setActive({
          home: false,
          project: false,
          contact: false,
          skill:true,
        });
      } 
      // else if (projectElement && scrollPosition >= projectElement.offsetTop && contactElement.offsetTop) {
      //   setActive({
      //     home: false,
      //     project: true,
      //     contact: false,
      //     skill:false,
      //   });  
      // }
      // else if(contactElement && scrollPosition >= contactElement.offsetTop){
      //   setActive({
      //     home: false,
      //     project: true,
      //     contact: false,
      //     skill:false,
      //   });  
      // }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

    const element = document.getElementById(value);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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
          title="contact"
          className={active.skill ? style.active : ""}
          onClick={() => handleChange("skill")}
        >
          <GiBrain />
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
