import React from "react";
import "../styles/globals.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Featured from "@/components/Featured";
import About from "@/components/About";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Featured />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
