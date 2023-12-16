import React from "react";
import styles from "./SkillBox.module.scss";

function SkillBox({ name, level, highlight }) {
  return (
    <div className={styles.skill__container}>
      <div className={styles.uFlex}>
        <i className={`uil uil-check-circle ${styles.skill__icon}`}></i>

        <span className={`${styles.skill__name} ${highlight ? styles.skill__highlight : ''}`}>{name}</span>
      </div>

      <span className={styles.skill__level}>{level}</span>
    </div>
  );
}

export default SkillBox;
