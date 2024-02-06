// Item.js
import React, { useState } from "react";
import Link from "next/link";
import { HeartIcon } from "@heroicons/react/24/solid";
import Tag from "./Tag";

const Item = ({
  postId,
  title = "Heading",
  category = "category",
  description = "some description about the model...",
  origin = "origin",
  likeCount = "0", // Initial likes count
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

  const [likes, setLikes] = useState(likeCount);
  const [isLiked, setIsLiked] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleLikeClick = async () => {
    try {
      const updatedLikes = Number(likes); // Convert likes to number

      // Make API call with updated like count
      const res = await fetch(`http://localhost:3000/api/blog/${postId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          likes: String(updatedLikes + (isLiked ? -1 : 1)), // Adjust like count
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to update like count");
      }

      // Update local state with string-based like count
      setLikes(String(updatedLikes + (isLiked ? -1 : 1)));
      setIsLiked((prevIsLiked) => !prevIsLiked);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="rounded-lg p-2 md:p-4 bg-gradient-to-r from-gray-200/20 to-slate-50 hover:text-blue-800 border hover:shadow-md hover:shadow-white  backdrop-blur-lg">
      <div className="flex justify-between">
        <div className="flex gap-x-2 md:gap-x-10">
          <Tag data={category}/>
          <Tag data={origin}/>
        </div>

        <div
          className="w-fit flex flex-col justify-center items-center"
          onClick={handleLikeClick}
        >
          <HeartIcon
            className={`w-7 ${
              isLiked ? "text-rose-500 bg-white" : " text-white bg-rose-500"
            } shadow-md shadow-rose-300 rounded-full p-1 cursor-pointer`}
          />
          <span className="text-sm font-semibold">{likes}</span>{" "}
        </div>
      </div>

      <div>
        <Link href={`/home/${postId}`}>
          <h1 className="md:text-xl text-lg font-bold my-2 md:my-3">
            {title}
          </h1>
        </Link>
      </div>

      <div>
        <p className="text-black text-sm md:text-sm">
          {showFullDescription
            ? description
            : `${description.slice(0, 200)}... `}
          <Link href={`/home/${postId}`}>

          <span
            className="text-blue-600 cursor-pointer"
            >
            Read more
          </span>
            </Link>
        </p>
      </div>
    </div>
  );
};

export default Item;
