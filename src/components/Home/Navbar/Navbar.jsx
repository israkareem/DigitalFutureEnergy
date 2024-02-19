import React from "react";
import style from "./Navbar.module.css";
import {
  sun,
  video,
  background,
  icon,
  globe,
} from "../../../assets/images/Home/ExportHomeImg";

function Menu() {
  return (
    <div>
      <nav className={style.navbar}>
        <div className={style.leftPart}>
          <img className={style.leftImg} src={sun} alt="Sun Energy Icon" />
          <p className={style.leftText}>Sun Energy</p>
        </div>

        <div className={style.middlePart}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="services">Services</a>
            </li>
            <li>
              <a href="partners">Partners</a>
            </li>
            <li>
              <a href="innovation">Innovation</a>
            </li>
            <li>
              <a href="support">Support</a>
            </li>
            <li>
              <a href="about">About Us</a>
            </li>
          </ul>
        </div>
        <div className={style.right}>
          <p className={style.rightText}>
            <a href="contact">Contact Us</a>
          </p>
          <img className={style.rightImg} src={icon} alt="Contact Us Icon" />
        </div>
      </nav>
    </div>
  );
}

export default Menu;
