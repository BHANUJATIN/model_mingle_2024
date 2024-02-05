import React from "react";

const randomColorClass = [
    "bg-purple-50 text-purple-700",
    "bg-blue-50 text-blue-700",
    "bg-pink-50 text-pink-700",
    "bg-green-50 text-green-700",
    "bg-roze-50 text-roze-700",
    "bg-lime-50 text-lime-700",
    "bg-orange-50 text-orange-700",
    "bg-indigo-50 text-indigo-700",
];

const getRandomIndex = () =>
    Math.floor(Math.random() * randomColorClass.length);

const Tag = ({data="tag"}) => {
    const randomIndex = getRandomIndex();
  return (
    <div className="w-fit">
      <p
        className={
          randomColorClass[randomIndex] + " p-1 ml-0 m-1 text-sm px-5 rounded-full"
        }
      >
        {data.slice(0, 10)}
      </p>
    </div>
  );
};

export default Tag;
