import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center  bg-gradient-to-tr from-red-300 via-blue-300 to-white">
      <div className="border-2  flex justify-center items-center
            flex-col gap-3 p-7 md:p-10 rounded-lg bg-gradient-to-bl from-gray-100 via-blue-200 to-gray-300 shadow-lg shadow-white border-white">
        <h1 className="text-lg md:text-3xl font-semibold ">Welcome to Model Mingle</h1>
              <p className="pb-2 font-mono">There are a lot like J.A.R.V.I.S.</p>
        <div className=" flex flex-col mt-3 md:mt-6 w-full md:w-2/3">
            <label className="pb-1 font-semibold">Enter your name 📝</label>
            <input type="text" className="p-2 rounded-lg border-2 font-mono text-blue font-semibold bg-slate-100 
            focus:outline-none" />
            <Link className="bg- text-white bg-black font-semibold text-lg w-fit px-4 md:px-8 p-1
            my-2 md:my-4 border-2 border-black rounded-lg  " href="/home">Visit 👀</Link>
        </div>
      </div>
    </main>
  );
}
