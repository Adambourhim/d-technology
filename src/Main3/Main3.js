import React from "react";

function Main3() {
  return (
    <div className={styles.container3}>
      <p className={styles.box5}>Product and Service</p>
      <div className={styles.boxes}>
        <div className={styles.box6}>
          <img
            style={{ width: "100px", height: "100px" }}
            src={icon1}
            alt="icon1"
          />
          <p className={styles.titleProduct}>Our Product</p>
          <p className={styles.discProduct}>
            Our product is made on the base of our team’s careful research and
            analyses, ranging from internet based application.
          </p>
          <button className={styles.btn2}>Read More</button>
        </div>
        <div className={styles.box7}>
          <img
            style={{ width: "100px", height: "100px" }}
            src={icon2}
            alt="icon2"
          />
          <p className={styles.titleProduct}>Our Service</p>
          <p className={styles.discProduct}>
            DSI’s shared service solutions focus on the front-end based software
            development, designed specifically for the banking and financial
            sectors.
          </p>
          <button className={styles.btn2}>Read More</button>
        </div>
        <div className={styles.box8}>
          <img
            style={{ width: "100px", height: "100px" }}
            src={icon3}
            alt="icon3"
          />
          <p className={styles.titleProduct}>Our Technology</p>
          <p className={styles.discProduct}>
            First JAVA, runs on more than 850 million personal computers
            worldwide, and on billions of devices worldwide, including mobile
            and TV devices.
          </p>
          <button className={styles.btn2}>Read More</button>
        </div>
      </div>
    </div>
  );
}

export default Main3;
