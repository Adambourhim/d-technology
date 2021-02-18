import React from "react";
import styles from "./service.module.css";
import line1 from "../Images/Backgroundpro.png";

function Service() {
  return (
    <div className={styles.bgImag}>
      <img className={styles.img1} src={line1} alt="" />
      <div className={styles.title}>
        Just a smile away from Winning your customer’s trust
      </div>
    </div>
  );
}

export default Service;
