import React from "react";
import styles from "./About.module.css";
import pana from "./Images/DSI.svg";
import icon1 from "./Images/icon1.svg";
import icon2 from "./Images/icon2.svg";
import dron from "./Images/col-md-8.svg";
import youtube from "./Images/col-md-9.svg";
import map from "./Images/@ map screen.png";
import tele from "./Images/Group 1321.svg";
import email from "./Images/Group 1319.svg";
import house from "./Images/Group 1323.svg";
function About() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.box1}>
            <div>
              to grow the business together{" "}
              <span style={{ fontWeight: "bold" }}>
                Continous effort through improvement and innovation
              </span>
            </div>
          </div>
          <div className={styles.box2}>
            <img src={pana} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.title}>
          About Dwidasa Samsara Indonesia (DSI)
        </div>

        <div className={styles.disc}>
          <div>
            <span style={{ color: "#EE4248" }}>
              Dwidasa Samsara Indonesia (DSI)
            </span>{" "}
            was firstly established in 2010 by the founders, who each of them
            has a common end objective to innovate new creations by making the
            most of the ever-growing information technology through{" "}
            <span style={{ color: "#EE4248" }}>DSI</span>'s distinct front-end
            based application concept. Managed by a team of professional experts
            with extensive experience and impressive track records,{" "}
            <span style={{ color: "#EE4248" }}>DSI</span> believes that
            continuous improvements and innovations assure your business to run
            effectively and efficiently.
          </div>
        </div>
        <div className={styles.disc}>
          <div>
            Then from that perspective, we named our company '
            <span style={{ color: "#EE4248" }}>Dwidasa Samsara Indonesia</span>
            ’, which means continuous efforts through improvement and innovation
            will help us evolving toward the forefront position in Indonesia. In
            responding to various clients’ specifi c requirements,{" "}
            <span style={{ color: "#EE4248" }}>DSI</span> will work consistently
            in optimizing its existing reliable resources combined with
            well-trained team supports, to present particularly the dynamic fi
            nancial industry sector with its customized solutions.
          </div>
        </div>
        <div className={styles.disc}>
          <div>
            Considering the complexity of the clients’ demand, however
            notwithstanding the size of the organization,{" "}
            <span style={{ color: "#EE4248" }}>DSI</span> is always committed to
            work effectively for growing the business together with business
            partners, through its innovative and collaborative methodology while
            assuring a fast response time to customers. That way, the final
            output is delivered in a secured and timely manner, towards the
            attainment of the most effi cient outcome.
          </div>
        </div>
        <div className={styles.disc}>
          <div>
            For <span style={{ color: "#EE4248" }}>DSI</span>, both technical
            and non-technical supports are as important as the partnership we
            have built with your business. Among others, our partnership
            portfolio has been built with various business segments such as
            Internet Service Provider (ISP), Application Service Provider (ASP)
            and Payment Network corporations. Through such partnerships, we are
            evolving together to a new height of innovative explorations and
            effective improvements with purpose to having a sustainable business
            operation cycles.
          </div>
        </div>
      </div>

      <div className={styles.container3}>
        <div className={styles.container3_box}>
          <div className={styles.drone}>
            <img src={dron} alt="" />
          </div>
          <div className={styles.future}>
            <div className={styles.futureTitle}>Our Future Prespective</div>
            <div className={styles.divIcon}>
              <div className={styles.sodivIcon}>
                <img src={icon1} alt="" />
                <h4>Vision</h4>
              </div>
              <div className={styles.sodivP}>
                <p>
                  To become the leading application service provider (ASP)
                  focusing on front-end application delivered for Indonesia’s
                  banking and fi nancial industry.
                </p>
              </div>
            </div>
            <div>
              <div className={styles.sodivIcon}>
                <img src={icon2} alt="" />
                <h4>Mission</h4>
              </div>
              <div className={styles.sodivP}>
                <p>
                  To grow the business together with clients by providing
                  enhanced services and wide delivery channel to end-users.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container4}>
        <div className={styles.section}>
          <div className={styles.section1}>
            <h3>DSI Culture</h3>
            <div className={styles.discYoutube}>
              Our commitment to innovation depends on everyone being comfortable
              sharing ideas and opinions. Every employee is a hands-on
              contributor, and everyone wears several hats. Because we believe
              that each DSI employee is an equally important part of our
              success.
            </div>
            <br />
            <div className={styles.discYoutube}>
              We deeply understand that the average working person spends at
              least eight hours or even more, so we spend one third even half of
              our lives to work in a day. therefore we strive to provide a fun
              and positive environment in addition to a wide range of benefits
              to provide safety so they can enjoy working at Dwidasa Samsara
              Indonesia.
            </div>
          </div>
          <div className={styles.section2}>
            <img src={youtube} alt="" />
          </div>
        </div>
      </div>
      <div className={styles.container5}>Contact Us</div>
      <div className={styles.container6}>
        <div className={styles.map}>
          <img src={map} alt="" />
        </div>
        <div className={styles.Info}>
          <div className={styles.soInfo}>
            <img src={house} alt="" />
            <div className={styles.discInfo}>
              <h3>Alamat</h3>
              <p>
                Jl. Halim Perdana Kusuma, Ring Road Bangkalan, Madura, Jawa
                Timur.
              </p>
            </div>
          </div>
          <div className={styles.soInfo}>
            <img src={email} alt="" />
            <div className={styles.discInfo}>
              <h3>Email</h3>
              <p>sekolahku@sch.id</p>
            </div>
          </div>
          <div className={styles.soInfo}>
            <img src={tele} alt="" />
            <div className={styles.discInfo}>
              <h3>Telpon</h3>
              <p>(031) 3092223</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
