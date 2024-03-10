// page.js
"use client"
import React, { useEffect, useState } from "react";
import Item from "@/components/Item";
import Navbar from "@/components/Navbar";
import LoadingSpinner from "@/components/LoadingSpinner";

const Page = () => {
  const [posts, setPosts] = useState([]);
  const [featured, setFeatured] = useState([]);
  const [activeTab, setActiveTab] = useState("home");
  const [isLoading, setIsLoading] = useState(true);

  const compareLikes = (a, b) => {
    return b.likes - a.likes;
  }

  useEffect(() => {
    async function fetchBlogs() {
      setIsLoading(true);
      const res = await fetch("/api/blog");
      const data = await res.json();
      setPosts(data.posts);
      const sortedPosts = data.posts.sort(compareLikes);
      const top3Featured = sortedPosts.slice(0, 3);
      setFeatured(top3Featured);
      setIsLoading(false);
    }
    fetchBlogs();
  }, [activeTab]);

  const handleToggle = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex md:gap-x-6 justify-center">
      <div className="w-11/12 md:w-7/12 px-2 md:px-4 pt-1">
        <div className="block md:hidden">
          <Navbar activeTab={activeTab} onToggle={handleToggle} />
        </div>
        
        <div className="mt-2 flex flex-col gap-y-3 md:gap-y-5">
          {isLoading && <LoadingSpinner/>}
          {!isLoading &&
            (activeTab === "home"
              ? posts.map((p) => (
                  <Item
                    key={p.id}
                    postId={p.id}
                    title={p.title}
                    origin={p.origin}
                    description={p.description}
                    likeCount={p.likes}
                    category={p.category}
                  />
                ))
              : featured.map((p) => (
                  <Item
                    key={p.id}
                    postId={p.id}
                    title={p.title}
                    origin={p.origin}
                    category={p.category}
                    description={p.description}
                    likeCount={p.likes}
                  />
                )))}
        </div>
      </div>

      <div className="hidden md:block w-4/12 p-4">
        <div>
          <h1 className="text-xl font-bold border-b ">Featured </h1>
        </div>
        <div className="mt-2 flex flex-col gap-y-3 px-2">
          {isLoading && <LoadingSpinner/>}
          {!isLoading &&
            featured.map((p) => (
              <Item
                key={p.id}
                postId={p.id}
                title={p.title}
                origin={p.origin}
                category={p.category}
                description={p.description}
                likeCount={p.likes}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
