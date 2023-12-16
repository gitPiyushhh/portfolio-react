import React, { useState } from "react";
import styles from "./Projects.module.scss";
import Wrapper from "./../components/Wrapper";
import Headings from "./../components/Headings";

function Projects() {
  const [active, setActive] = useState(0);

  return (
    <Wrapper>
      <Headings heading="Projects" subheading="Most recent works" />

      <div className={styles.projects}>
        <div className={styles.projects__tagContainer}>
          <span
            className={`${styles.projects__tag} ${
              active === 0 && `${styles.active}`
            }`}
            onClick={active => setActive(0)}
          >
            All
          </span>

          <span
            className={`${styles.projects__tag} ${
              active === 1 && `${styles.active}`
            }`}
            onClick={active => setActive(1)}
          >
            Web-apps
          </span>

          <span
            className={`${styles.projects__tag} ${
              active === 2 && `${styles.active}`
            }`}
            onClick={active => setActive(2)}
          >
            Rest API's
          </span>
        </div>

        <div className={styles.projects__container}></div>
      </div>
    </Wrapper>
  );
}

export default Projects;
