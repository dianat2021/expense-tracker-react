import React from "react";
import styles from "../Styles/Expenses.module.css";
const Expenses = () => {
  return (
    <div className={styles.container}>
       <span>Add expenses</span>
      <form className={styles.form}>
        <div className={styles["expense-label"]}>
          <div>
            <label>Expense</label>
          </div>
          <div>
            <label>Price</label>
          </div>
          <div>
            <label>Date</label>
          </div>
        </div>
        <div className={styles["expense-input"]}>
          <div>
            <input type="text" />
          </div>
          <div>
            <input type="text" />
          </div>
          <div>
            <input type="date" />
          </div>
        </div>
      </form>
      <button className={styles.add}>Add</button>
    </div>
  );
};

export default Expenses;
