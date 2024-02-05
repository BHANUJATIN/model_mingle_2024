// pages/blog/[id].js
"use client";
import React, { useEffect, useState } from "react";
import Blog from "@/components/Blog";
import LoadingSpinner from "@/components/LoadingSpinner";

const getBlogById = async (id) => {
  const res = await fetch(`http://localhost:3000/api/blog/${id}`);
  const data = await res.json();
  return data.post;
};

const Page = ({ params }) => {
  const [postData, setPostData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postId = params.id;
        const data = await getBlogById(postId);
        setPostData(data); // Update the state with the fetched data
      } catch (error) {
        console.error("Error fetching blog post:", error);
      }
    };

    fetchData();
  }, [params.id]); // Include params.id as a dependency to re-run effect when id changes

  return (
    <div className="">
      {postData ? (
        <Blog data={postData} />
      ) : (
        <div className="m-12">
          <LoadingSpinner />
        </div>
      )}
    </div>
  );
};

export default Page;
