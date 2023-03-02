import React, { useContext } from "react";
import styles from "../Styles/Budget.module.css";
import { DataContext } from "../Context/DataContext";

const Budget = () => {
  const {budget, month, setBudget, setMonth, setBudgetMonthList} = useContext(DataContext)
  const monthHandler = (e)=>{
    setMonth(e.target.value)
  }
  const budgetHandler = (e)=>{
    setBudget(e.target.value)
  }
  const submitBudgetHandler = ()=>{
    if(!budget || !month) return
    const budgetMonthData = {
      budget,
      month
    }
    setBudgetMonthList(budgetMonthData);
    setMonth("");
    setBudget("")
  }
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
            <input type="month" onChange={monthHandler} value={month}/>
          </div>
          <div>
            <input type="text" onChange={budgetHandler} value={budget}/>
          </div>
        </div>
      </div>
      <button className={styles["add-button"]} onClick={submitBudgetHandler}>Add</button>
    </section>
  );
};

export default Budget;
