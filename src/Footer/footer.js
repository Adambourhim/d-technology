import React from "react";
import styles from "./footer.module.css";
import logo from "../HomePage/Images/DSI.svg";
import pic1 from "../HomePage/Images/image 10.svg";
import pic2 from "../HomePage/Images/image 11.svg";
import pic3 from "../HomePage/Images/image 13.svg";
import pic4 from "../HomePage/Images/image 7.svg";
import pic5 from "../HomePage/Images/image 9.svg";
import pic6 from "../HomePage/Images/image 14.svg";
function footer() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.box1}>
          <img src={logo} alt="" />
          <h5>PT Dwidasa Samsara Indonesia</h5>
          <p>
            Ruko Jalur Sutera 29A No. 53 Alam Sutera Serpong, Tangerang 15323
          </p>
        </div>
        <div className={styles.box2}>
          <h5>Contact</h5>
          <p>Phone : +62.21.5314.1135</p>
          <p>Fax : +62.21.5314.1135</p>
          <p>Email : community@dwidasa.com</p>
        </div>
        <div className={styles.box3}>
          <div className={styles.picture1}>
            <img src={pic4} alt="" />
            <img src={pic5} alt="" />
            <img src={pic1} alt="" />
          </div>
          <div className={styles.picture2}>
            <img src={pic2} alt="" />
            <img src={pic6} alt="" />
            <img src={pic3} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.box4}>Copyright © 2021 - Adam Ben Bourhim</div>
    </>
  );
}

export default footer;
