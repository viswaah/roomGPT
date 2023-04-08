import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";

export default function Header({
  photo,
  email,
}: {
  photo?: string;
  email?: string;
}) {
  const [showUserOption, setShowUserOption] = useState(false);
  return (
    <header className="flex flex-row justify-between relative items-center w-full mt-3 border-b pb-7 sm:px-4 px-2 border-gray-500 gap-2">
      <Link href="/dream" className="flex space-x-2">
        <Image
          alt="header text"
          src="/bed.svg"
          className="sm:w-10 sm:h-10 w-9 h-9"
          width={24}
          height={24}
        />
        <h1 className="text-3xl font-bold ml-2 tracking-tight hidden sm:block">
          roomGPT.io
        </h1>
      </Link>
      {email ? (
        <div className="flex items-center space-x-4">
          <div className="md:flex items-center space-x-4 hidden">
            <Link
              href="/dashboard"
              className="border-r border-gray-300 pr-4 flex space-x-2 hover:text-blue-400 transition"
            >
              <div>Dashboard</div>
            </Link>
            <Link
              href="/buy-credits"
              className="border-r border-gray-300 pr-4 flex space-x-2 hover:text-blue-400 transition"
            >
              <div>Buy Credits</div>
              <div className="text-blue-500 bg-blue-200 rounded-full px-2 text-xs flex justify-center items-center font-bold">
                New
              </div>
            </Link>
          </div>
          {photo ? (
            <Image
              alt="Profile picture"
              src={photo}
              className="w-10 rounded-full cursor-pointer"
              width={32}
              height={28}
              onClick={() => setShowUserOption(!showUserOption)}
              />
              ) : (
                <div className="w-10 h-10 rounded-full bg-white cursor-pointer" 
                onClick={() => setShowUserOption(!showUserOption)}/>
          )}
          <div className={"user-dropdown absolute right-4 top-11 w-40 mt-2 py-2 bg-[#17181C] border border-slate-400 rounded shadow-xl" + (showUserOption ? " show" : "")}>   
          <Link
              href="/dashboard"
              className="block md:hidden transition-colors duration-200 px-4 py-2 text-normal text-gray-900 rounded hover:bg-blue-600 text-white"
            >
              Dashboard
            </Link>
          <Link
              href="/buy-credits"
              className="block md:hidden transition-colors duration-200 px-4 py-2 text-normal text-gray-900 rounded hover:bg-blue-600 text-white"
            >Buy Credits</Link>
            <a href="#" onClick={(e) => {e.preventDefault();signOut()}} className="transition-colors duration-200 block px-4 py-2 text-normal text-gray-900 rounded hover:bg-blue-600 text-white">Logout</a>
          </div>
        </div>
      ) : (
        <Link
          className="flex max-w-fit items-center justify-center space-x-2 rounded-lg border border-blue-600 text-white px-5 py-2 text-sm shadow-md hover:bg-blue-400 bg-blue-600 font-medium transition"
          href="/dream"
        >
          <p>Sign Up </p>
        </Link>
      )}
    </header>
  );
}
