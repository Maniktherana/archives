import React from "react";

const Search = () => {
  return (
    <div className="flex justify-center">
      <div className="w-70">
        <div className="input-group relative flex flex-wrap items-stretch w-full">
          <input
            type="search"
            className="form-control relative flex-auto min-w-50 block w-100 px-3 py-1.5 text-base font-normal text-gray-700 bg-gray-100 bg-clip-padding border border-gray-100 focus:border-gray-300 focus:outline-none rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon2"
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Search;
