import React from "react";
import styles from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container mx-auto flex flex-col items-center justify-space-apart">
        <div className={styles.heroTag}>
          <h2 className="text-4xl mb-2 font-bold text-green-700">Welcome</h2>
        </div>
        <div className={styles.heroImage}>
          <div className="text-6xl mx-6 my-24 text-right">To Egg.</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
