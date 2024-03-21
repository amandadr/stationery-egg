import React from "react";
import "../styles/globals.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
