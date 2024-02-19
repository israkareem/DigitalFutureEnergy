import React from "react";
import {
  cloud,
  img,
  pic,
  power,
  arrow,
} from "../../assets/images/About/ExportAboutImg";
import style from "./About.module.css";

export default function About() {
  return (
    <div>
      <img className={style.Image} src={img} />
      <img className={style.pic} src={pic} />
      <img className={style.power} src={power} />
      <img className={style.cloud} src={cloud} />
      <div>
        <p className={style.text}>
          Decarbonization is mission, critical for the planet
        </p>

        <div className={style.topLeftPartBtn}>
          <span className={style.topLeftPartBtnText}>Learn More</span>
          <img className={style.arrow} src={arrow} />
        </div>
      </div>
      <div>
        <div className={style.p}>
          <p>
            The global energy landscape will change more in the next 10 years
            than in the previous hundred. As the world’s energy sector moves
            away from fossil fuels toward renewable energy sources, industrial
            companies are challenged with addressing this transition in
            transformative ways.
          </p>

          <p>
            Renewable Energy harnesses the earth’s most abundant resources – the
            strength of the wind, the heat of the sun, ,and the force of water;
            delivering green electrons to power the world’s biggest economies
            and the most remote communities.
          </p>
        </div>
      </div>
    </div>
  );
}
