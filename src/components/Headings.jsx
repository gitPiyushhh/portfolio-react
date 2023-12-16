import React from "react";
import styles from "./Headings.module.scss";

function Headings({heading, subheading}) {
  return (
    <div className={styles.headings}>
      <span className={styles.headings__heading}>{heading}</span>
      <span className={styles.headings__subHeading}>{subheading}</span>
    </div>
  );
}

export default Headings;
