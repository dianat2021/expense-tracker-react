import React, { useContext } from "react";
import styles from "../Styles/Expenses.module.css";
import { DataContext } from "../Context/DataContext";
import uuid from "react-uuid";
import { type } from "@testing-library/user-event/dist/type";
const Expenses = () => {
  const {
    expense,
    price,
    date,
    setExpense,
    setPrice,
    setDate,
    setExpensesList,
    expensesList,
    setTotal,
  } = useContext(DataContext);
  //-------------------------------------------------------
  const expenseHandler = (e) => setExpense(e.target.value);
  const priceHandler = (e) => setPrice(e.target.value);
  const dateHandler = (e) => setDate(e.target.value);
  //-------------------------------------------------------


  const submitExpensesHandler = () => {
    const expenseData = {
      expense,
      price,
      date,
      id: uuid(),
    };
    setExpensesList((prev) => [...prev, expenseData]);
    setExpense("");
    setPrice("");
    setDate("");
  };

  return (
    <div className={styles.container}>
      <span>Add expenses</span>
      <form className={styles.form}>
        <div className={styles["expense-label"]}>
          <div>
            <label>Expense </label>
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
            <input
              type="text"
              onChange={expenseHandler}
              value={expense}
              required
            />
          </div>
          <div>
            <input type="text" onChange={priceHandler} value={price} required />
          </div>
          <div>
            <input type="date" onChange={dateHandler} value={date} />
          </div>
        </div>
      </form>
      <button className={styles.add} onClick={submitExpensesHandler}>
        Add expense
      </button>
    </div>
  );
};

export default Expenses;
