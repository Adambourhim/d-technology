import React from "react";
import styles from "./main.module.css";
import line from "../Images/Background.png";

function Service() {
  return (
    <>
      <div className={styles.container}>
        <h3>Just a smile away from</h3>
        <h3 className={styles.title}>Winning your customer’s trust</h3>
      </div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ee4248"
            fill-opacity="1"
            d="M0,96L60,128C120,160,240,224,360,234.7C480,245,600,203,720,165.3C840,128,960,96,1080,85.3C1200,75,1320,85,1380,90.7L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </>
  );
}

export default Service;
