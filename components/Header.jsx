"use client";
import React from "react";
import {
  MagnifyingGlassIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/navigation";


const Header = ({handleSearch}) => {
  const router = useRouter();

  return (
    <div className="sticky top-0 z-50 flex w-screen justify-between items-center px-4 py-2 md:py-2 md:px-14 border-b-2 backdrop-blur-sm bg-white/10">
      <div className="font-mono text-xl md:text-4xl py-2">
        <Link href="/home">
          <p className="">MM</p>
        </Link>
      </div>
      <div className="flex items-center">
        <span className="w-5 md:w-7">
          <MagnifyingGlassIcon />
        </span>
        <div>
          <input
            className="hidden md:block bg-white md:p-2 md:px-4 rounded-full focus:border ml-1 focus:outline-none"
            placeholder="Search..."
            onChange={handleSearch}
          />
        </div>
        <Link href="/create">
          <div className="flex items-center ml-1 md:mr-3">
            <span className="w-5 md:w-7">
              <PlusCircleIcon />
            </span>
            <p className="font-bold">Add</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
