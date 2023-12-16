import React from "react";
import styles from "./Skills.module.scss";
import Wrapper from "./../components/Wrapper";
import Headings from "./../components/Headings";
import Skill from "../components/Skill";
import SkillBox from "../components/SkillBox";

function Skills() {
  return (
    <Wrapper>
      <Headings heading="Skills" subheading="My technical skills" />

      <div className={styles.skills}>
        <Skill heading="Frontend">
          {" "}
          <div className={styles.uFlex}>
            <SkillBox name="HTML/CSS" level="Advance" />{" "}
            <SkillBox name="Javascript" level="Intermediate" />
            <SkillBox name="Typescript" level="Basic" />
            <SkillBox name="Next.js" level="Intermediate" />
            <SkillBox name="GraphQl" level="Basic" />
            <SkillBox name="React.js" level="Intermediate" highlight={true}/>
          </div>
        </Skill>
        <Skill heading="Backend">
          <div className={styles.uFlex}>
            <SkillBox name="Firebase" level="Basic" />
            <SkillBox name="MongoDb" level="Intermediate" highlight={true}/>
            <SkillBox name="Node.js" level="Advance" highlight={true}/>{" "}
            <SkillBox name="DSA" level="Intermediate" />
            <SkillBox name="Socket.io" level="Basic" />
            <SkillBox name="WebRTC" level="Basic" />
          </div>
        </Skill>
        <Skill heading="Devops">
          <div className={styles.uFlex}>
            <SkillBox name="Git" level="Advance" highlight={true}/>{" "}
            <SkillBox name="Linux" level="Intermediate" />
            <SkillBox name="Docker" level="Basic" />
            <SkillBox name="Azure" level="Intermediate" highlight={true}/>
            {/* <SkillBox name="Socket.io" level="Intermediate" /> */}
            <SkillBox name="Networking" level="Basic" highlight={true}/>
          </div>
        </Skill>
      </div>
    </Wrapper>
  );
}

export default Skills;
