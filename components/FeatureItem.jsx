import React from "react";

const FeatureItem = ({
  heading = "Heading",
  category = "category",
  description = "some description about the model...",
  origin = "origin",
}) => {
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

  // Function to get a random index within the range of the array length
  const getRandomIndex = () =>
    Math.floor(Math.random() * randomColorClass.length);

  // Get random indexes for both p tags
  const randomIndex1 = getRandomIndex();
  const randomIndex2 = getRandomIndex();

  return (
    <div className="rounded-lg p-2 md:p-4 bg-blue-50 hover:text-blue-800 shadow-sm shadow-gray-300 hover:border-blue-700 hover:border">
      <div className="flex gap-x-6">
        <p
          className={
            randomColorClass[randomIndex1] + " p-1 ml-0 m-1 px-4 rounded-md text-sm"
          }
        >
          {category}
        </p>
        <p
          className={
            randomColorClass[randomIndex2] + " p-1 m-1 px-4 rounded-md text-sm"
          }
        >
          {origin}
        </p>
      </div>
      <div>
        <h1 className="md:text-xl text-lg font-bold my-2 md:my-3">
          {heading}
        </h1>
      </div>
    </div>
  );
};

export default FeatureItem;
