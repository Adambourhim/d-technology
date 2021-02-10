import React from "react";

function Main2() {
  return (
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
          Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by the
          founders, who each of them has a common end objective to innovate new
          creations by making the most of the ever-growing information
          technology through <span style={{ color: "#EE4248" }}>DSI</span>’s
          distinct front-end based application concept.
          <br /> Managed by a team of professional experts with extensive
          experience and impressive track records,{" "}
          <span style={{ color: "#EE4248" }}>DSI</span> believes that continuous
          improvements and innovations assure your business to run effectively
          and efficiently.
        </p>
      </div>
    </div>
  );
}

export default Main2;
