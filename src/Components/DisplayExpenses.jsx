import React, { useContext } from "react";
import styles from "../Styles/DisplayExpenses.module.css";
import { DataContext } from "../Context/DataContext";
import { FaTrashAlt } from "react-icons/fa";
const DisplayExpenses = () => {
  const { budgetMonthList, expensesList, setExpensesList } = useContext(DataContext);

  const deleteExpenseHandler = (expense)=>{
    setExpensesList(expensesList.filter( item => item.id !== expense.id ))
  }
  return (
    <div className={styles.container}>
      <h3>
        {`Expenses ${
          budgetMonthList.month ? `for ${budgetMonthList.month}` : ""
        }`}{" "}
      </h3>
      <ol>
        <li className={styles["list-header"]}>
          <label className={styles.expense}>Expense</label>
          <label className={styles.price}>Price</label>
          <label className={styles.date}>Date</label>
          <label  className={styles.action}></label>
        </li>
        {expensesList.length === 0 && <p className={styles.noExpense}>No expenses to show</p>}
        { expensesList.map((expense) => (
          <li key={expense.id} className={styles["expenses-list"]}>
            <label className={styles.expenseTitle}>{expense.expense}</label>
            <label className={styles.expensePrice}>{expense.price && `$ ${expense.price}`}</label>
            <label className={styles.expenseDate}>{expense.date}</label>
            <button className={styles.DeleteIcon} onClick={()=>deleteExpenseHandler(expense)}>Delete <FaTrashAlt/></button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default DisplayExpenses;
