import React from "react";
import style from "./Support.module.css";
import {
  ic_arrow,
  Icon,
  Image,
  Vector,
} from "../../assets/images/Support/ExportSupportImg";

export default function Support() {
  return (
    <section className={style.supportSection}>
      <div className={style.support}>
        {/* top part */}
        <div className={style.topPart}>
          {/* left part */}
          <div className={style.topLeftPart}>
            <p className={style.topLeftPartText1}>our solution</p>
            <span className={style.topLeftPartSpan}></span>

            <p className={style.topLeftPartText2}>
              Powering A Sustainable and Profitable Energy Transition on Digital
              Solutions
            </p>
            <div className={style.topLeftPartBtn}>
              <span className={style.topLeftPartBtnText}>Learn More</span>
              <img className={style.topLeftPartBtnImg} src={ic_arrow} />
            </div>
          </div>

          {/* right part */}

          <div className={style.topRightPart}>
            <div className={style.supportBigImage}>
              <img className={style.bigImg} src={Image} />
            </div>
            <div className={style.gridSolotionDev}>
              <img className={style.gridSolotionImg} src={Icon} />
              <span className={style.gridSolotionSpan}>Grid Solution</span>
            </div>
            <div className={style.vectorIcon}>
              <img className={style.supportSmallImage} src={Vector} />
            </div>
            <div className={style.shapeOne}></div>
            <div className={style.shapeTwo}></div>
          </div>
        </div>

        {/* down part */}

        <div className={style.downPart}>
          <p className={style.downPartText}>
            Decarbonization requires balance between legacy systems and emerging
            technologies. Between the environment and business economies.
          </p>
        </div>
      </div>
    </section>
  );
}
