import React from "react";
import styles from "./footer.module.css";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LanguageIcon from "@mui/icons-material/Language";

const Footer = () => {
  return (
    <div className={styles.body}>
      <div className={styles.callContainer}>
        <PhoneIcon />{" "}
        <span>
          Toll Free <b>1800 200 1234</b>{" "}
        </span>
      </div>
      <div className={styles.facebookContainer}>
        <FacebookRoundedIcon />{" "}
        <span>
          <a href="www.facebook.com/cripumps">www.facebook.com/cripumps</a>
        </span>
      </div>
      <div className={styles.websiteContainer}>
        <LanguageIcon />{" "}
        <span>
          <a href="www.crigroups.com">www.crigroups.com</a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
