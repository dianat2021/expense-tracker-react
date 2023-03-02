import React, { useContext } from "react";
import styles from "../Styles/Report.module.css";
import { DataContext } from "../Context/DataContext";
const Report = () => {
  const { budgetMonthList, totalExpenses } = useContext(DataContext);



  // ${}

  
  console.log(budgetMonthList)
  console.log(totalExpenses)
  return (
    <div className={styles.container}>
      <div className={styles["report-container"]}>
        <div className={styles["report-elements"]}>
          <label>Total budget</label>
          <p>{budgetMonthList.budget ? "$" + budgetMonthList.budget : "$0"}</p>
        </div>
        <div className={styles["report-elements"]}>
          <label>Total expenses</label>
          <p>${totalExpenses}</p>
        </div>
        <div className={styles["report-elements"]}>
          <label>Remaining Budget</label>
          <p>{!budgetMonthList.budget ? '$'+0 : '$'+ (budgetMonthList.budget  - totalExpenses)}</p>
        </div>
      </div>
    </div>
  );
};

export default Report;
