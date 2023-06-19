import { useState } from "react";

interface IProduct {}
export default function SearchBox() {
  const [serachValue, setSearchValue] = useState<string>();
  return (
    <div className="flex h-12 w-full items-center rounded-full bg-white pl-1">
      <div className=" rounded-full bg-gray-300 p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="red"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
      <input
        value={serachValue}
        onChange={(e) => setSearchValue(e.target.value)}
        className="mr-3 w-full focus-visible:outline-none text-center"
      />
    </div>
  );
}
