import React from "react";
import styles from "./content.module.css";
import contentPic from "../../assets/3.png";

const Content = () => {
  return (
    <div className={styles.body}>
      <p className={styles.heading}>
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION
      </p>
      <figure>
        <img src={contentPic} alt="" />
        <figcaption>
          Valves - Pumps - PipesIoT Drivers & Controllers - Wires & Cables -
          Solar Systems - Motors
        </figcaption>
      </figure>
      <hr />
    </div>
  );
};

export default Content;
