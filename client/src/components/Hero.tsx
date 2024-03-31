import React from "react";
import styles from "../styles/Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className="container mx-auto flex flex-col items-center justify-space-apart">
        <div className={styles.heroTag}>
          <h2 className="text-4xl mb-6 font-bold text-green-700">Welcome!</h2>
        </div>
        <div className="flex flex-col w-screen gap-y-[5em]">
          <div className={styles.heroImage}>
            <div className="text-6xl mx-12 h-[100%] flex justify-end items-center">
              To Egg.
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className="text-6xl mx-12 h-[100%] flex justify-start items-center">
              This is Egg.
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className="text-6xl mx-12 h-[100%] flex justify-end items-center">
              A very great Egg.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
