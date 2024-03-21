import React from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container mx-auto flex items-center justify-between py-4">
        <a href="/">
          <h1 className="text-3xl font-semibold text-green-700">Egg</h1>
        </a>
        <nav>
          <a href="#" className="mr-6">
            Login
          </a>
          <a href="#">Cart(0)</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
