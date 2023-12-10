import { IoHomeSharp } from "react-icons/io5";
import { GoProjectRoadmap } from "react-icons/go";
import { MdContactPage } from "react-icons/md";
import style from "./Menu.module.css"
const Menu = () => {
  return (
    <div className={style.menu}>
        <ul>
            <li>
                <IoHomeSharp/>
            </li>
            <li>
                <GoProjectRoadmap/>
            </li>
            <li>
                <MdContactPage/>
            </li>
        </ul>
    </div>
  )
}

export default Menu
