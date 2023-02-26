import React from "react";
import styles from "../Styles/Header.module.css";
import { FaCoins } from "react-icons/fa";
const Header = () => {
  return (
    <div className={styles.container}>
      <header>
        <h3>Expense Tracker <FaCoins/></h3>
      </header>
    </div>
  );
};

export default Header;
