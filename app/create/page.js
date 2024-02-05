"use client";
import AddForm from "@/components/AddForm";
import React from "react";

const page = () => {
  return (
    <div className="">
      <div className="p-3 md:p-7 w-full h-full flex justify-center items-center">
        <div className="w-full h-4/5" data-color-mode="light">
          <div className="w-full text-center">
            <h2 className="m-4 text-xl md:text-4xl font-mono font-bold">Add Your Own LLM Model</h2>
          </div>
          <AddForm />
        </div>
      </div>
    </div>
  );
};

export default page;
