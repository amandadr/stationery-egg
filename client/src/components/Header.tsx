import React from "react";
import styles from "../styles/Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link href="/">
          <h1 className="text-3xl font-semibold text-green-700">Egg</h1>
        </Link>
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
