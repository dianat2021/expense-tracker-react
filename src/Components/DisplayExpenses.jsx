import React from "react";
import styles from "../Styles/DisplayExpenses.module.css";

const DisplayExpenses = () => {
  return (
    <div className={styles.container}>
      <h3>Expenses </h3>
      <ul>
        <li className={styles['list-header']}>
          <label className={styles.expense}>Expense</label>
          <label className={styles.price}>Price</label>
          <label className={styles.date}>Date</label>
          <label ></label>
        </li>
      </ul>
    </div>
  );
};

export default DisplayExpenses;
