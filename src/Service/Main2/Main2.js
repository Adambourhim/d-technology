import React from "react";
import styles from "./Main2.module.css";
import pana from "../Images/pana.svg";
function Main2() {
  return (
    <div className={styles.container}>
      <div className={styles.box1}>
        <div className={styles.title}>Our Service</div>
        <div className={styles.disc}>
          DSI’s shared service solutions focus on the front-end based software
          development, designed specifically for the banking and financial
          sectors. We short-cut your front-liners to customers interaction
          process through a way that mediates your business process in a more
          direct communication means, in just a smile away from winning your
          customer’s trust.
        </div>
        <div className={styles.disc}>
          Through close partnership, we always work together with your team, all
          throughout from pretopost project cycles – initial planning, project
          development, implementation, evaluation up to reporting documentation
          – to fully coach you so that all your specific business.
        </div>
        <div className={styles.disc}>
          requirements can be delivered at the right time to the right audience
          of particular interests. Moreover, our team will support you to
          provide a detailed consultation throughout operation stage, and after
          the project implementation cycles by applying specific monitoring and
          improvement methodology. Our experienced people will drive your
          personalized service, by utilizing the best technology supports no
          other businesses can provide.
        </div>
      </div>
      <div className={styles.box2}>
        <img src={pana} alt="" />
      </div>
    </div>
  );
}

export default Main2;
