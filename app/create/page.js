"use client";
import AddForm from "@/components/AddForm";
import Link from "next/link";
import {
  ArrowLeftIcon
} from "@heroicons/react/24/outline";
import React from "react";

const page = () => {
  return (
    <div className="">
      <div className="p-3 md:p-7 w-full h-full flex justify-center items-center">
      <Link title="Home" href={"/home"} className="absolute top-20 left-5 md:top-32 md:left-15 w-6 md:w-10">
        <ArrowLeftIcon/>
      </Link>
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
