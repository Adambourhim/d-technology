import React, { Fragment } from "react";
import styles from "./main.module.css";
import pana1 from "../Images/pana.svg";

import icon1 from "../Images/product-description 1.svg";
import icon2 from "../Images/verified 1.svg";
import icon3 from "../Images/verified 1.svg";
function Main() {
  return (
    <div className={styles.container}>
      <div className={styles.box1}>
        <p className={styles.title}>
          Making the most of the ever-growing{" "}
          <span style={{ color: "#EE4248" }}>Information Technology</span>
        </p>
        <p
          className={styles.title2}
          style={{ fontSize: "20px", color: "#30444E", lineHeight: "1.5" }}
        >
          Managed by a team of professional experts with extensive experience
          and impressive track records
        </p>
        <div className={styles.gbtn}>
          <button className={styles.btn}>Read More</button>
        </div>
      </div>
      <div className={styles.box2}>
        <img className={styles.pana} src={pana1} alt="pana" />
      </div>
    </div>
  );
}

export default Main;
