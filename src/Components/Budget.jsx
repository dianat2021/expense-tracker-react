import React from "react";
import styles from "../Styles/Budget.module.css";
const Budget = () => {
  return (
    <section className={styles.container}>
      <span>Budget & Month</span>
      <div className={styles["budget-container"]}>
        <div className={styles["budget-label"]}>
          <div>
            <label>Month</label>
          </div>
          <div>
            <label>Budget</label>
          </div>
        </div>

        <div className={styles["budget-input"]}>
          <div>
            <input type="month" />
          </div>
          <div>
            <input type="text" />
          </div>
        </div>
      </div>
      <button className={styles["add-button"]}>Add</button>
    </section>
  );
};

export default Budget;
