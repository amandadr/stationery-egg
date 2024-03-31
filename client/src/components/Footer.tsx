import React from "react";
import styles from "../styles/Footer.module.css";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-space-between">
        <p className="text-sm text-gray-600 mb-4">
          &copy; 2023 Egg - All rights reserved
        </p>
        <div className="mt-4">
          <SocialIcon
            network="instagram"
            url="https://www.instagram.com/"
            bgColor="#323"
            className="mr-4"
          />
          <SocialIcon
            network="linkedin"
            url="https://www.linkedin.com/"
            bgColor="#323"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
