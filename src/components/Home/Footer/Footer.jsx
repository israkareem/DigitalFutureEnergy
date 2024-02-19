import React from "react";
import {
  sun,
  video,
  background,
  icon,
  globe,
} from "../../../assets/images/Home/ExportHomeImg";
import style from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footerLeft}>
        <p className={style.footerLeftText1}>10M+</p>
        <p className={style.footerLeftText2}>
          Worldwide product sales per year
        </p>
        <img className={style.footerLeftImg} src={video} />
      </div>
      <div className={style.footerRight}>
        <div className={style.footerRightTop}></div>
        <div className={style.footerRightDown}>
          <div className={style.footerRightDownPkg}>
            <div>
              <svg
                className={style.svgImage}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1840 820"
              >
                <path
                  fill="#0365D3"
                  fill-opacity="0.9"
                  d="M 100 300 Q 150 300 200 300 Q 250 300 300 300 Q 350 300 400 300 C 450 300 450 300 1350 300 C 1400 300 1450 350 1500 400 C 1600 500 1600 500 1650 550 L 1200 550 L 200 550 L 100 550 L 100 300  "
                ></path>
              </svg>
            </div>
            <p className={style.footerRightDownText}>
              Reducing carbon and costs while providing sustainable, reliable,
              and affordable power
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
