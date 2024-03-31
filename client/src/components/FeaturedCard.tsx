import React from "react";

const FeaturedCard = ({
  img,
  title,
  price,
}: {
  img: string;
  title: string;
  price: number;
}) => {
  return (
    <div className="h-full w-full mx-2 rounded-lg flex flex-1 flex-col items-center justify-start bg-gray-500">
      <div className="text-2xl m-[.25em] h-full w-[80%] flex flex-col align-center">
        <img
          src={
            img ||
            "https://i.pinimg.com/originals/6d/7e/b8/6d7eb8df7e8e29238c8c2b87277c3ad9.gif"
          }
          alt="featured"
          className="flex rounded-md my-[.5em] h-auto w-full bg-gray-200"
        />
        <div className="relative w-[90%] ml-2 font-semibold">
          {title || "Title"}
        </div>
      </div>
      <div className="relative text-2xl w-[75%] ml-2 mt-2 bottom-0 pb-4">
        {`$${price}` || "$44.99"}
      </div>
    </div>
  );
};

export default FeaturedCard;
