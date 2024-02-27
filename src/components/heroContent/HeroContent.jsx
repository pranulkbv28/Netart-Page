import React from "react";
import styles from "./heroContent.module.css";
import trophyPhoto from "../../assets/1.png";
import handshakePhoto from "../../assets/2.png";

const HeroContent = () => {
  return (
    <div className={styles.body}>
      <div className={styles.trophyContainer}>
        <img src={trophyPhoto} alt="" />
      </div>
      <div className={styles.handshakeContainer}>
        <h4>
          C.R.I PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the
          4th time.
        </h4>
        <ul>
          <li>
            C.R.I.'s energy efficient products are well recognized by various
            Government Institutions, as trustworthy products for various
            projects across the globe to save energy.
          </li>
          <li>
            C.R.I. is the highest contributor in the country for the projects of
            EESL (Energy Efficieny Service Limited) to replace the old
            inefficient pumps with 5 star rated energy efficent smart pumps with
            IoT enabled control panel
          </li>
        </ul>
        <figure>
          <img src={handshakePhoto} alt="" />
          <figcaption>
            Government of India has awarded the{" "}
            <b>
              <q>National Energy Conservation Award 2018.</q>
            </b>{" "}
            Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received
            the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri.
            Raj Kumar Singh, Honorable Minister of State.
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default HeroContent;
