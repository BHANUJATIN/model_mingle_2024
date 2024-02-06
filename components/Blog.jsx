"use client";
import React from "react";
import Tag from "./Tag";
import {
  ArrowTopRightOnSquareIcon,
  DocumentIcon,
} from "@heroicons/react/24/outline";
import { getDateFormat } from "@/util/getDateFormat";

const Blog = ({ data }) => {
  return (
    <div className="w-full h-full flex justify-center py-4">
      <div className=" m-2 md:m-0 md:w-10/12 border-2 shadow-xl shadow-gray-500 p-4 md:p-10 bg-gradient-to-t from-slate-200 to-slate-50 text-black rounded-xl border-white">
        <div className="w-full font-bold justify-center flex pb-7">
          <div className="text-xl md:text-5xl">{data.title}</div>
        </div>
        <div className="">
          <div className="flex gap-x-7 items-center pb-2">
            <div>
              <p className="text-sm text-blue-500">{getDateFormat(data.date).disp}</p>
            </div>
            <div>
              <Tag data={data.category} />
            </div>
          </div>

          <p>{data.description}</p>
        </div>
        <div className="py-4 my-4">
          <h3 className="text-lg md:text-3xl my-2 font-bold">Use Cases</h3>
          <p>{data.usecase}</p>
        </div>
        <div className=" flex flex-col gap-y-6 md:flex-row gap-x-4">
          <a
            href={data.linkdoc}
            className="md:w-fit border-2 gap-x-2 items-center border-black p-2 rounded-full px-6 flex justify-between"
          >
            Documentation <DocumentIcon className="w-5 h-5" />
          </a>
          <a
            href={data.linkmodel}
            className="md:w-fit border-2 gap-x-2 items-center border-black p-2 rounded-full px-6 flex justify-between"
          >
            Try it now <ArrowTopRightOnSquareIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
