import "./App.css";

//COMPONENTS
import Header from "./Components/Header";
import Budget from "./Components/Budget";
import Expenses from "./Components/Expenses";
import Report from "./Components/Report";
import DisplayExpenses from "./Components/DisplayExpenses";

function App() {
  return (
    <div className="main-container">
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
    </div>
  );
}

export default App;
