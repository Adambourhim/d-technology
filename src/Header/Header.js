import React from "react";

import logo from "../Images/DSI.svg";
import styles from "./navbar.module.css";
import union from "../Images/Union.svg";
import mail from "../Images/mail.svg";
import media from "../Images/shuffle.svg";
import edit from "../Images/edit.svg";
function Header() {
  const toggleButton = document.getElementsByClassName("button")[0];
  const navbarLinks = document.getElementsByClassName("links")[0];
  const show = () => {
    toggleButton.addEventListener("click", () => {
      navbarLinks.classList.toggle("active");
    });
  };

  return (
    <div className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.title}>
          <img src={logo} alt="" />
        </div>
        <a href="#" className={styles.button} onClick={show}>
          <img src={edit} alt="" />
        </a>
        <div className={styles.links}>
          <ul>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Product</a>
            </li>
            <li>
              <a href="#">Technology</a>
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
