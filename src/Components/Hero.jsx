import React, { useState } from "react";

import Classes from "../Styles/Hero.module.css";
import Banner from "../assets/hero.png";

function Hero() {
  const [modal, setModal] = useState(false);

  return (
    <>
      <div className={!modal && Classes.open}>
        <div className={Classes.modalContainer}>
          <h5>We Receive your information</h5>

          <button onClick={() => setModal(false)}>Ok</button>
        </div>
      </div>

      <section id="hero" className={Classes.heroContainer}>
        <div className={Classes.heroimage}>
          <img src={Banner} alt="" />
        </div>

        <div className={Classes.content}>
          <div className={Classes.title}>
            <h1>
              Travel & Explore With{" "}
              <span className={Classes.nickName}>Santosh Travels</span>
            </h1>
            <p>
              Save at least 15% on stays worldwide, from relaxing retreats to
              off-grid adventures
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
