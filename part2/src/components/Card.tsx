import { useState } from "react";

const stats = [
  {
    id: 1,
    number: 12,
    desc: "Experiences this week",
  },
  {
    id: 2,
    number: 24,
    desc: "Experiences overall",
  },
  {
    id: 3,
    number: 12,
    desc: "Courses this week",
  },
  {
    id: 4,
    number: 12,
    desc: "Experiences this week",
  },
  {
    id: 5,
    number: 24,
    desc: "Experiences overall",
  },
  {
    id: 6,
    number: 12,
    desc: "Courses this week",
  },
];

const Card = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-5 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between">
          <h3 className="text-xl font-extrabold tracking-tight text-gray-900">
            Your Stats
          </h3>
          <button
            className="text-sm text-gray-700 font-bold"
            onClick={handleShowMore}
          >
            see all
          </button>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-4 md:hidden ">
          {showMore
            ? stats.map((item) => (
                <div key={item.id} className="group relative">
                  <div className="w-full min-h-[135px] p-4 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <p className="text-xl font-semibold">{item.number}</p>
                    <p className="text-sm leading-4">{item.desc}</p>
                  </div>
                </div>
              ))
            : stats.slice(0, 2).map((item) => (
                <div key={item.id} className="group relative">
                  <div className="w-full min-h-[135px] p-4 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <p className="text-xl font-semibold">{item.number}</p>
                    <p className="text-sm leading-4">{item.desc}</p>
                  </div>
                </div>
              ))}
        </div>
        <div className="hidden mt-6 md:grid grid-cols-2 gap-y-10 gap-x-4 md:grid-cols-3 lg:grid-cols-3 xl:gap-x-4">
          {showMore
            ? stats.map((item) => (
                <div key={item.id} className="group relative">
                  <div className="w-full min-h-[135px] p-4 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <p className="text-xl font-semibold">{item.number}</p>
                    <p className="text-sm leading-4">{item.desc}</p>
                  </div>
                </div>
              ))
            : stats.slice(0, 3).map((item) => (
                <div key={item.id} className="group relative">
                  <div className="w-full min-h-[135px] p-4 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <p className="text-xl font-semibold">{item.number}</p>
                    <p className="text-sm leading-4">{item.desc}</p>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
