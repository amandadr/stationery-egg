import React from "react";
import "../styles/globals.css";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <div className="container w-[100%]">
      <div className="h-[20em] flex flex-row items-center justify-space-between">
        <h1 className="text-4xl mx-[2em] mt-[-4em] font-bold text-green-700 flex flex-2 justify-center">
          About Us.
        </h1>
        <p className="text-lg m-2 flex flex-1 justify-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="container flex flex-row gap-x-2 items-start justify-center">
        <AboutCard
          img="https://www.semikolon.ca/media/cms/files/design-ohne-titel-(12)-kwwk7u-piw81p.png"
          title="Crafted by hand"
          comment="Because it's supposed to last a lifetime."
          description="Even today, the majority of our products are made by hand in our own factory in the Czech Republic."
        />
        <AboutCard
          img="https://www.semikolon.ca/media/cms/files/design-ohne-titel-(10)-393ogb-cglbst.png"
          title="Swedish fine paper"
          comment="For an unforgettable writing experience."
          description="We use Swedish fine paper from the MUNKEN brand for our notebooks, diaries, calendars and guest books."
        />
        <AboutCard
          img="https://www.semikolon.ca/media/cms/files/design-ohne-titel-(11)-blj5ec-fsxcaq.png"
          title="Bookbinding linen"
          comment="A traditional craft with a modern twist."
          description="There is hardly a binding material that surpasses the value of linen. The book linen we use is also characterized by its particularly sensual feel."
        />
        <AboutCard
          img="https://www.semikolon.ca/media/cms/files/design-ohne-titel-(14)-ix3aev.png"
          title="FSC certified"
          comment="Because our environment is important to us."
          description="FSC is the most reliable organization for safeguarding important environmental and social standards in the forest."
        />
      </div>
    </div>
  );
};

export default About;
