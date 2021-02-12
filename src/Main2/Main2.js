import React from "react";
import styles from "./main2.module.css";
import panaTow from "../Images/pana2.svg";
function Main2() {
  return (
    <div className={styles.main2}>
      <div className={styles.container}>
        <div className={styles.box2}>
          <img className={styles.pana} src={panaTow} alt="" />
        </div>
        <div className={styles.box1}>
          <p className={styles.title}>
            Welcome to{" "}
            <span style={{ color: "#EE4248" }}>
              Dwidasa Samsara Indonesia (DSI)
            </span>
          </p>
          <p className={styles.title2}>
            Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by
            the founders, who each of them has a common end objective to
            innovate new creations by making the most of the ever-growing
            information technology through (DSI)’s distinct front-end based
            application concept.
          </p>
          <p className={styles.title2}>
            Managed by a team of professional experts with extensive experience
            and impressive track records, (DSI) believes that continuous
            improvements and innovations assure your business to run effectively
            and efficiently.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Main2;
