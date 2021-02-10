import React, { Fragment } from "react";
import styles from "./main.module.css";
import pana1 from "../Images/pana.svg";
import pana2 from "../Images/pana2.svg";
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
        <p style={{ fontSize: "20px", color: "#30444E", lineHeight: "1.5" }}>
          Managed by a team of professional experts with extensive experience
          and impressive track records
        </p>
        <button className={styles.btn}>Read More</button>
      </div>
      <div className={styles.box2}>
        <img className={styles.pana} src={pana1} alt="pana" />
      </div>
    </div>
  );
}

export default Main;
