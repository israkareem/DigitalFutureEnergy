import React from "react";
import style from "./Services.module.css";
import {
  icon1,
  icon2,
  icon3,
  image,
  arrow,
} from "../../assets/images/Services/ExportServicesImg";

export default function Services() {
  return (
    <section className={style.serviceSection}>
      {/* left part */}
      <div className={style.leftSection}>
        {/* for three part  */}
        <div className={style.leftSectionParts}>
          <div className={style.leftSectionPart1}>
            <img className={style.leftSectionPart1Img1} src={icon1} alt="" />
            <span className={style.leftSectionPart1Text1}>
              Sustainable Energy Transition
            </span>
          </div>
          <div className={style.leftSectionPart2}>
            <img className={style.leftSectionPart1Img2} src={icon2} alt="" />
            <span className={style.leftSectionPart1Text2}>
              Reliable Energy Transition
            </span>
          </div>
          <div className={style.leftSectionPart3}>
            <img className={style.leftSectionPart1Img3} src={icon3} alt="" />
            <span className={style.leftSectionPart1Text3}>
              Affordable Energy Transition
            </span>
          </div>
        </div>
        {/* for image */}
        <div className={style.leftSectionBG}>
          <img src={image} alt="" />
        </div>
      </div>
      {/* right part */}
      <div className={style.rightSection}>
        <p className={style.rightSectionTitle}>benefits</p>
        {/* span for line */}
        <span className={style.rightSectionLine1}></span>
        <p className={style.rightSectionText}>
          Solving the energy transition trilemma
        </p>
        <div className={style.rightSectionBtn}>
          <span className={style.rightSectionBtnText}>Learn More</span>
          <img className={style.vrightSectionBtnImg} src={arrow} alt="" />
        </div>
        {/* span for line */}
        <div className={style.rightSectionLine2}></div>
        <p className={style.rightSectionText2}>
          Read Digital's new white paper on sustainability and profitability and
          understand how you can unlock balanced energy and business models
          while better managing asset risk and carbon emissions.
        </p>
      </div>
      <div className={style.blure} />
    </section>
  );
}
