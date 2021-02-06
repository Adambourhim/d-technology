import React from "react";
import styles from "./main.module.css";
function Main() {
  return (
    <div className={styles.container}>
      <div className={styles.box1}>
        <p className={styles.title}>
          Making the most of the ever-growing{" "}
          <span style={{ color: "#EE4248" }}>Information Technology</span>
        </p>
        <p style={{ fontSize: "17px", color: "#30444E" }}>
          Managed by a team of professional experts with extensive experience
          and impressive track records
        </p>
        <button className={styles.btn}>Read More</button>
      </div>
    </div>
  );
}

export default Main;
