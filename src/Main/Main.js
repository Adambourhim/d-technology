import React, { Fragment } from "react";
import styles from "./main.module.css";
import pana1 from "../Images/pana.svg";
import pana2 from "../Images/pana2.svg";
import icon1 from "../Images/product-description 1.svg";
import icon2 from "../Images/verified 1.svg";
import icon3 from "../Images/verified 1.svg";
function Main() {
  return (
    <Fragment>
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
      <div className={styles.container2}>
        <div className={styles.box3}>
          <img className={styles.pana2} src={pana2} alt="" />
        </div>
        <div className={styles.box4}>
          <p className={styles.title2}>
            Welcome to{" "}
            <span style={{ color: "#EE4248" }}>
              Dwidasa Samsara Indonesia (DSI)
            </span>
          </p>
          <p className={styles.disc}>
            Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by
            the founders, who each of them has a common end objective to
            innovate new creations by making the most of the ever-growing
            information technology through DSI’s distinct front-end based
            application concept.
            <br /> Managed by a team of professional experts with extensive
            experience and impressive track records, DSI believes that
            continuous improvements and innovations assure your business to run
            effectively and efficiently.
          </p>
        </div>
      </div>
      <div className={styles.container3}>
        <p className={styles.box5}>Product and Service</p>
        <div className={styles.boxes}>
          <div className={styles.box6}>
            <img
              style={{ width: "100px", height: "100px" }}
              src={icon1}
              alt="icon1"
            />
          </div>
          <div className={styles.box7}>
            <img
              style={{ width: "100px", height: "100px" }}
              src={icon2}
              alt="icon2"
            />
          </div>
          <div className={styles.box8}>
            <img
              style={{ width: "100px", height: "100px" }}
              src={icon3}
              alt="icon3"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Main;
