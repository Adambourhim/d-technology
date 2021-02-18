import React from "react";
import styles from "./product.module.css";
import pana from "./Images/pana.svg";
function product() {
  return (
    <div className={styles.container}>
      <div className={styles.box1}>
        <div className={styles.disc}>
          The most advanced technology always work hand-in-hand with qualified
          people
        </div>
      </div>
      <div className={styles.box2}>
        <div className={styles.Global}>
          <div className={styles.title}>Our Product</div>
          <div className={styles.disc2}>
            Our product is made on the base of our team’s careful research and
            analyses, ranging from internet based application such as Internet
            Banking; mobile frontend application such as Mobile Banking;
            transaction based banking such as EDC Banking; and other financial
            platforms such as Personal Investment Portfolio.
          </div>
          <div className={styles.disc2}>
            Our product and service range will technically safeguard your
            business operations through continued application development. It is
            all topped with our integrated procedure made in accordance with the
            industry’s best practices, which will drive the built-in system
            towards the creation of secured and value added services for you as
            business partners.
          </div>
        </div>
        <div className={styles.dviPic}>
          <img src={pana} alt="" />
        </div>
      </div>
    </div>
  );
}

export default product;
