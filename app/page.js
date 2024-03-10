import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center  bg-gradient-to-tr from-gray-600 via-slate-700 to-black text-white">
      <div className="border flex justify-center items-center
            flex-col gap-3 p-7 md:p-10 rounded-2xl bg-gradient-to-bl from-gray-800 via-slate-800 to-slate-800 shadow-lg shadow-white border-white">
        <h1 className="text-lg md:text-3xl font-semibold ">Welcome to Model Mingle</h1>
              <p className="pb-2 font-mono">There are a lot like J.A.R.V.I.S.</p>
        <div className=" flex flex-col mt-3 md:mt-6 w-full md:w-2/3">
            <label className="pb-1 font-semibold">Enter your name 📝</label>
            <input type="text" className="p-2 rounded-lg border-2 font-mono text-blue font-semibold bg-slate-700 
            focus:outline-none" />
            <Link className="m-auto p-auto text-center text-white bg-black font-semibold text-lg w-full px-4 md:px-8 p-1
            my-2 md:my-4 border-2 border-black rounded-lg  " href="/home">Visit 👀</Link>
        </div>
      </div>
    </main>
  );
}
