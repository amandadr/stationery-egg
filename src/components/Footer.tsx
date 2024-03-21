import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center">
        <p className="text-sm text-gray-600 mb-4">
          &copy; 2023 Egg - All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
