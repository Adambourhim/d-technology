import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../HomePage/Images/DSI.svg";
import styles from "./navbar.module.css";
import union from "../HomePage/Images/Union.svg";
import mail from "../HomePage/Images/mail.svg";
import media from "../HomePage/Images/shuffle.svg";
import { GrClose } from "react-icons/gr";
import { GrTextAlignRight } from "react-icons/gr";
import { IoIosArrowDown } from "react-icons/io";

function Header() {
  const [showbar, setShowbar] = useState(false);
  const [aboutbar, setAboutbar] = useState(false);
  return (
    <>
      <div className={styles.header}>
        <nav className={styles.navbar}>
          <div className={styles.title}>
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div
            href="#"
            className={styles.button}
            onClick={() => setShowbar(!showbar)}
          >
            {showbar ? (
              <GrClose size="30px" />
            ) : (
              <GrTextAlignRight size="30px" />
            )}
          </div>
          <div className={styles.links}>
            <ul>
              <li>
                <Link to="/Service">Services</Link>
              </li>
              <li>
                <Link to="/Product">Product</Link>
              </li>
              <li>
                <Link to="/Technology">Technology</Link>
              </li>
              <li>
                <select className={styles.aboutClient}>
                  <option value="About">About</option>
                  <option value="About">About Client</option>
                </select>
              </li>
              <li>
                <a href="#">Client</a>
              </li>
              <li>
                <a href="#">Partner</a>
              </li>
            </ul>
          </div>
          <div className={styles.icon}>
            <img src={union} alt="" />
            <img src={mail} alt="" />
            <img src={media} alt="" />
          </div>
        </nav>
      </div>

      {showbar ? (
        <div className={styles.navbar2}>
          <div className={styles.links2}>
            <ul>
              <li>
                <Link to="/Service" onClick={() => setShowbar(!showbar)}>
                  Services
                </Link>
              </li>
              <li>
                <Link to="/Product" onClick={() => setShowbar(!showbar)}>
                  Product
                </Link>
              </li>
              <li>
                <Link to="/Technology" onClick={() => setShowbar(!showbar)}>
                  Technology
                </Link>
              </li>
              <li>
                <Link to="/About" onClick={() => setShowbar(!showbar)}>
                  About
                </Link>
              </li>
              <li>
                <a href="#">Client</a>
              </li>
              <li>
                <a href="#">Partner</a>
              </li>
            </ul>
          </div>
        </div>
      ) : null}
      {aboutbar ? (
        <div className={styles.aboutClient}>
          <Link>About Client</Link>
        </div>
      ) : null}
    </>
  );
}

export default Header;
