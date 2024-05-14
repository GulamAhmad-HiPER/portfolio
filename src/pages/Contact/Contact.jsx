import style from "./Contact.module.css";
import Imganimation from "../../components/Imganimation/Imganimation";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Contact = () => {
  return (
    <section id="contact" className={style.contact_container}>
      <div className={style.form_container}>
        <h1 className="primary-fs">
          <Imganimation text="Contact Me" singleline={true} speed={30} />
        </h1>
        <p>ahmedgulam83@gmail.com</p>
        <hr />
        <div className={style.icons}>
          <a href="https://instagram.com" target="__blank">
            <FaInstagram title="__izaar" />
          </a>
          <a href="https://wa.me/+918433595066" target="__blank">
            <FaWhatsapp />
          </a>
          <a href="https://gmail.com">
            <BiLogoGmail />
          </a>
          <a href="https://www.linkedin.com/in/gulam-ahmad-siddique-06703120b/">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
