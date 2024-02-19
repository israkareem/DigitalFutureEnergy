import React from "react";
import {
  sun,
  video,
  background,
  icon,
  globe,
} from "../../../assets/images/Home/ExportHomeImg";
import style from "./Content.module.css";

export default function Content() {
  return (
    <section className={style.section}>
      <div className={style.sectionLeft}>
        <p className={style.leftText1}>RENEWABLE ENERGY</p>
        <h1 className={style.leftText2}>Digital in the Future of Energy</h1>
      </div>
      <div className={style.sectionRight}>
        <p className={style.rightText1}>
          Enable reliable, cost effective and dispatchable power
        </p>
        <p className={style.rightText2}>
          Sun Energy has accumulated more than 9 gigawatts of total global
          installed base and backlog for its inverter technology...
        </p>
        <div className={style.rightBtn}>
          <img className={style.rightImg} src={globe} />
          <p className={style.rightText}>Save Earth</p>
        </div>
      </div>
    </section>
  );
}
