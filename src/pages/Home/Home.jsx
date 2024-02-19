import React from "react";
import style from "../../components/Home/Home.module.css";

import Navbar from "../../components/Home/Navbar/Navbar";
import Content from "../../components/Home/Content/Content";
import Footer from "../../components/Home/Footer/Footer";
import Support from "../../components/Support/Support";
import About from "../../components/About/About";
import Partners from "../../components/Partners/Partners";

function Home() {
  return (
    <div>
      <div className={style.background}>
        <Navbar />
        <Content />
        <Footer />
      </div>
      <About />
      <Support />
      <Partners />
    </div>
  );
}

export default Home;
