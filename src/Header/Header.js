import React from "react";
import { Link } from "react-router-dom";
import logo from "../HomePage/Images/DSI.svg";
import styles from "./navbar.module.css";
import union from "../HomePage/Images/Union.svg";
import mail from "../HomePage/Images/mail.svg";
import media from "../HomePage/Images/shuffle.svg";
import edit from "../HomePage/Images/edit.svg";
function Header() {
  return (
    <div className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.title}>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <a href="#" className={styles.button}>
          <img src={edit} alt="" />
        </a>
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
              <a href="#">About</a>
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
  );
}

export default Header;
