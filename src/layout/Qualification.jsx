import React, { useState } from "react";
import styles from "./Qualification.module.scss";
import Wrapper from "../components/Wrapper";
import Headings from "../components/Headings";
import QualificationBox from "../components/QualificationBox";
import EducationBox from "../components/EducationBox";

function Qualification() {
  const [isActive, setIsActive] = useState(0);

  return (
    <Wrapper>
      <Headings heading="Qualifications" subheading="Education & Experience" />
      <div className={styles.qualification}>
        <div className="u-flex">
          <div className={styles.qualification__section} onClick={isActive => setIsActive(0)}>
            <div
              className={`${isActive === 0 && styles.qualification__head} ${
                styles.uMB
              }`}
            >
              <i className={`uil uil-briefcase ${styles.qualification__icon}`}></i>
              <span className={styles.qualification__title}>Experience</span>
            </div>

            <QualificationBox
              heading="SDE Intern"
              subheading="Begaluru, India"
              icon="calendar"
              date="Nov, 2023 - Present"
              styles={{}}
            />
            <QualificationBox
              heading="Associate"
              subheading="Begaluru, India"
              icon="calendar"
              date="Aug, 2023 - Nov, 2023"
              styles={{}}
            />
          </div>

          <div
            className={styles.qualification__section}
            onClick={isAsctive  => setIsActive(1)}
          >
            <div
              className={`${isActive === 1 && styles.qualification__head} ${
                styles.uMB
              }`}
            >
              <i
                className={`uil uil-graduation-cap ${styles.qualification__icon}`}
              ></i>
              <span className={styles.qualification__title}>Education</span>
            </div>

            <EducationBox
              heading="B.Tech"
              subheading="PSIT, Kanpur"
              icon="calendar"
              date="Aug, 2019 - Aug, 2023"
              styles={{}}
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Qualification;
