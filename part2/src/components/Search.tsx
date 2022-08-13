import React from "react";

const Search = () => {
  return (
    <form className="max-w-sm px-2">
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 bottom-0 w-5 h-5 my-auto text-gray-600 left-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search"
          className="w-full py-2 pl-8 pr-4 text-gray-500 text-sm text-light  rounded-sm outline-none bg-gray-100 focus:bg-white focus:border focus:border-gray-300"
        />
      </div>
    </form>
  );
};

export default Search;

// <div className="flex justify-center">
//   <div className="w-70">
//     <div className="input-group relative flex flex-wrap items-stretch w-full">
//       <input
//         type="search"
//         className="relative flex-auto min-w-50 block w-100 px-3 py-2 text-sm font-normal text-gray-700 bg-gray-100 bg-clip-padding border border-gray-100 focus:border-gray-300 focus:outline-none rounded"
//         placeholder="Search"
//         aria-label="Search"
//         aria-describedby="button-addon2"
//       ></input>
//     </div>
//   </div>
// </div>
