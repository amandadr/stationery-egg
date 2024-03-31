import React from "react";

const AboutCard = ({
  img,
  title,
  comment,
  description,
}: {
  img: string;
  title: string;
  comment: string;
  description: string;
}) => {
  return (
    <div className="container my-4 flex flex-1 flex-col items-center justify-center">
      <img
        height="90%"
        width="90%"
        src={
          img ||
          "https://i.pinimg.com/originals/6d/7e/b8/6d7eb8df7e8e29238c8c2b87277c3ad9.gif"
        }
        alt="about"
        className="rounded-md mb-[.5em] bg-gray-200"
      />
      <div className="text-md m-[.25em] w-[90%] mt-[-.25em] font-bold flex flex-1 justify-center text-center">
        {title || "Title"}
      </div>
      <div className="text-md m-[.25em] w-[80%] italic flex flex-1 justify-center text-center">
        {comment || "Comment"}
      </div>
      <div className="text-md m-[.25em] w-[90%] flex flex-1 justify-center text-center">
        {description || "Description"}
      </div>
    </div>
  );
};

export default AboutCard;
