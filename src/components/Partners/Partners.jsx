import React from "react";
import style from "./Partners.module.css";
import {
  background,
  arrow,
} from "../../assets/images/Partners/ExportPartnersImg";

function Partners() {
  return (
    <section className={style.background}>
      <div className={style.card}>
        <p className={style.title}>
          Partnering to drive digitization of the power sector
        </p>
        <p className={style.text1}>
          In partnership with some of the world’s largest utilities and energy
          producers, we’re helping to drive digitization. Model entire networks
          to help power utilities reduce costs.{" "}
        </p>
        <div className={style.btn}>
          <span className={style.btnText}>Learn More</span>
          <img className={style.btnImg} src={arrow} alt="btn icon" />
        </div>
      </div>
    </section>
  );
}

export default Partners;
