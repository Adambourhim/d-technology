import React from "react";
import styles from "./product.module.css";
function product() {
  return (
    <div className={styles.container}>
      <div className={styles.box1}>
        <p className={styles.disc}>
          The most advanced technology always work hand-in-hand with qualified
          people
        </p>
      </div>
      <div className={styles.box2}></div>
    </div>
  );
}

export default product;
