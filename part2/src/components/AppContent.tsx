import React from "react";

const AppContent = () => {
  return (
    <div className="p-10">
      <div className="flex flex-col justify-start items-start space-y-2">
        <p className="text-md font-bold">👋 Welcome back, John!</p>
        <p className="text-sm text-gray-500 hidden md:block">
          How are we Edvolving today?
        </p>
        <p className="text-sm text-gray-500 block md:hidden">
          Whats it going to be today?
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default AppContent;
