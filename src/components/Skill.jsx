import React from 'react';
import styles from './Skill.module.scss'

function Skill({heading, children}) {
  return (
    <div className={styles.skill__container}>
        <span className={styles.skill__heading}>
            {heading}
        </span>

        {children}
    </div>
  )
}

export default Skill