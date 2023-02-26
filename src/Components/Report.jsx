import React from "react";
import styles from "../Styles/Report.module.css";
const Report = () => {
  return (
    <div className={styles.container}>
      <div className={styles["report-container"]}>
        <div className={styles['report-elements']}>
          <label>Total budget</label>
          <p>0</p>
        </div >
        <div className={styles['report-elements']}>
          <label>Total expenses</label>
          <p>0</p>
        </div>
      </div>
    </div>
  );
};

export default Report;
