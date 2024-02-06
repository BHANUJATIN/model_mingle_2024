import React from "react";
import Link from "next/link";
import {
  ArrowLeftIcon
} from "@heroicons/react/24/outline";

const MoveToHome = () => {
  return (
    <Link
      title="Home"
      href={"/home"}
      className="absolute top-16 left-5 md:top-32 md:left-15 w-6 md:w-10"
    >
      <ArrowLeftIcon />
    </Link>
  );
};

export default MoveToHome;
