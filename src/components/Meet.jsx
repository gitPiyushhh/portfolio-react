import React from "react";
import styles from "./Meet.module.scss";

function Meet() {
  return (
    <button className={styles.meet}>
      Video intro
      <i className={`${styles.meet__icon} uil uil-user `}></i>
    </button>
  );
}

export default Meet;
