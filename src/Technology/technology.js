import React from "react";
import bg from "./Images/Group 1331.svg";
import pic2 from "./Images/@ Macbook Pro.svg";
import styles from "./technology.module.css";
import java from "./Images/java.svg";
import html5 from "./Images/html_5.svg";
import php from "./Images/Group 1318.svg";
import css3 from "./Images/css_3.svg";
import microsoft from "./Images/microsoft.svg";
function technology() {
  return (
    <>
      <div className={styles.box1}>
        <div className={styles.box1Img}>
          <img src={bg} alt="" />
        </div>
        <div className={styles.box1Text}>
          “Knowledge” some way of future up-to-date in latest technology
        </div>

        <button className={styles.box1Btn}>learn More</button>
        <div className={styles.box1Mac}>
          <img src={pic2} alt="" />
        </div>
      </div>

      <div className={styles.container2}>
        <div className={styles.contImg}>
          <img src={java} alt="" />
        </div>
        <div className={styles.contImg}>
          <img src={php} alt="" />
        </div>
        <div className={styles.contImg}>
          <img src={css3} alt="" />
        </div>
        <div className={styles.contImg}>
          <img src={html5} alt="" />
        </div>
        <div className={styles.contImg} style={{ marginTop: "7px" }}>
          <img src={microsoft} alt="" />
        </div>
      </div>
      <div className={styles.container3}>
        <div className={styles.title}>Our Technology</div>
        <br />
        <div className={styles.disc1}>
          First JAVA, runs on more than 850 million personal computers
          worldwide, and on billions of devices worldwide, including mobile and
          TV devices.The latest Java version contains important enhancements to
          improve performance, stability and security of the Java applications
          that run on your machine. Installing this free update will ensure that
          your Java applications continue to run safely and efficiently. The
          best part of JAVA is free.
        </div>
        <div className={styles.disc1}>
          We also use PHP for general occation, why? we think you already know
          the reason,of course because is the most flexible language on earth
          that can colaborate very well with all language.
        </div>
        <div className={styles.disc1}>
          for the strusture is HTML & CSS ( who does not know ? ) cause it's the
          basic language use for the web and help us creating a very outstanding
          view. its become important cause it make our system looks good in
          front of the eyes of our client, (doesnt agree?), Hmm, let me ask you
          if you have a good software but with bad UI/UX, do people use it?
          cause for it we can reach our goals.
        </div>
        <div className={styles.disc1}>
          What about Microsoft technology, why not. . . We always strive to
          remain the best and try to keep developing what we have.
        </div>
      </div>
    </>
  );
}

export default technology;
