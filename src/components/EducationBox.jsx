import React from "react";
import styles from "./EducationBox.module.scss";

function EducationBox({heading, subheading, icon, date}) {
  return (
    <div className={styles.qualificationBox}>
      <span className={styles.qualificationBox__heading}>{heading}</span>

      <span className={styles.qualificationBox__subheading}>{subheading}</span>

      <span className={styles.qualificationBox__time}>
        <i className={`uil uil-${icon}-alt ${styles.qualificationBox__icon}`}></i>
        {date}
      </span>
    </div>
  );
}

export default EducationBox;
