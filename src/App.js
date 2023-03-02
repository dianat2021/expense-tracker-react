import React, { useState } from "react";
import { DataContext } from "./Context/DataContext";
import "./App.css";

//COMPONENTS
import Header from "./Components/Header";
import Budget from "./Components/Budget";
import Expenses from "./Components/Expenses";
import Report from "./Components/Report";
import DisplayExpenses from "./Components/DisplayExpenses";

function App() {
  const [budget, setBudget] = useState("");
  const [month, setMonth] = useState("");
  const [expense, setExpense] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [budgetMonthList, setBudgetMonthList] = useState([]);
  const [expensesList, setExpensesList] = useState([]);

  const totalExpenses = expensesList.reduce((total, item)=>
    total = total + parseInt(item.price)
  ,0);

  return (
    <div className="main-container">
      <DataContext.Provider
        value={{
          budget,
          month,
          expense,
          expensesList,
          price,
          date,
          budgetMonthList,
          totalExpenses,
          setBudget,
          setMonth,
          setExpense,
          setPrice,
          setDate,
          setBudgetMonthList,
          setExpensesList,
        }}
      >
        <div className="grid-header">
          <Header />
        </div>
        <div className="grid-budget">
          <Budget />
        </div>
        <div className="grid-expenses">
          <Expenses />
        </div>
        <div className="grid-display">
          <DisplayExpenses />
        </div>
        <div className="grid-report">
          <Report />
        </div>
      </DataContext.Provider>
    </div>
  );
}

export default App;
