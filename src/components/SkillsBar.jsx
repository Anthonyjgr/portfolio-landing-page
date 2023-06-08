import React from "react";
import styles from "./styles.module.css";
import skills from "./skillsData";

const SkillsBar = () => {
  return (
    <div className={styles.mainContainer}>
      {/* skilss*/}
      <div className={styles.skillsContainer}>
        <ul>
          {skills.map((skills) => {
            return <li key={skills.name}>{skills.name}</li>;
          })}
        </ul>
      </div>
      {/* Percentage */}
      <div className={styles.percentageContainer}>
        {skills.map((skill) => {
          return (
            <div className={styles.percentageOutside} key={skill.name}>
              <div style={skill.styles} className={styles.percentageInside} key={skill.name}></div>
              {/* <div className={styles.finalReference}></div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsBar;
