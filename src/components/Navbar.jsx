import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
import Wrapper from "./Wrapper";

function Navbar() {
  return (
    <Wrapper>
      <div className={styles.navbar}>
        <div className={styles.navbar__inner}>
          <div className="navbar__left">
            <Link>
              <p className={styles.navbar__logo}>Piyush</p>
            </Link>
          </div>

          <div className={styles.navbar__right}>
            <NavLink>
              <p className={styles.navbar__link}>Home</p>
            </NavLink>

            <NavLink>
              <p className={styles.navbar__link}>About</p>
            </NavLink>

            <NavLink>
              <p className={styles.navbar__link}>Skills</p>
            </NavLink>

            <NavLink>
              <p className={styles.navbar__link}>Experience</p>
            </NavLink>

            <NavLink>
              <p className={styles.navbar__link}>Projects</p>
            </NavLink>

            <NavLink>
              <p className={styles.navbar__link}>Contact</p>
            </NavLink>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Navbar;
