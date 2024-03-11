// Item.js
import React, { useState } from "react";
import Link from "next/link";
import { HeartIcon as HeartOutlineIcon} from "@heroicons/react/24/outline";
import { HeartIcon as HeartFillIcon} from "@heroicons/react/24/solid";
import Tag from "./Tag";


const Item = ({
  postId,
  title = "Heading",
  category = "category",
  description = "some description about the model...",
  origin = "origin",
  likeCount = "0", // Initial likes count
}) => {

  const [likes, setLikes] = useState(likeCount);
  const [isLiked, setIsLiked] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleLikeClick = async () => {
    try {
      const updatedLikes = Number(likes); // Convert likes to number

      // Make API call with updated like count
      const res = await fetch(`/api/blog/${postId}`, {
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
    // <div className="rounded-lg p-2 md:p-4 bg-gradient-to-r from-gray-200/20 to-slate-50 hover:text-blue-800 border hover:shadow-md hover:shadow-white  backdrop-blur-lg">
    <div className="rounded-lg p-2 md:p-4 bg-gray-800 hover:shadow-md hover:bg-gray-700  backdrop-blur-lg text-white">
      <div className="flex justify-between">
        <div className="flex gap-x-2 md:gap-x-10">
          <Tag data={category} />
          <Tag data={origin} />
        </div>
        
        <div
          className="w-fit flex flex-col justify-center items-center"
          onClick={handleLikeClick}
        >
          {
            isLiked ? <HeartFillIcon className="w-5"/>: 
              <HeartOutlineIcon className="w-5"/>
          }
          <span className="text-sm font-semibold">{likes}</span>{" "}
        </div>
      </div>

      <div>
        <Link href={`/home/${postId}`}>
          <h1 className="md:text-xl text-lg font-bold my-2 md:my-3">{title}</h1>
        </Link>
      </div>

      <div>
        <p className="text-sm md:text-sm">
          {showFullDescription
            ? description
            : `${description.slice(0, 200)}... `}
          <Link href={`/home/${postId}`}>
            <span className="text-blue-600 cursor-pointer">Read more</span>
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Item;