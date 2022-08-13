import { useState } from "react";

const mentors = [
  {
    id: 1,
    name: "John Doe",
    desc: "Fitness enthusiast, and founder of fitnessme.io! Can't wait to teach you kids.",
    photo:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },
  {
    id: 2,
    name: "Corporal Bloggins",
    desc: "Love all things science! A Neuroscience maior and excited about Astronomy.",
    photo:
      "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  },
];

const MentorPanel = () => {
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-5 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="flex justify-between">
          <h3 className="text-xl font-bold tracking-tight text-gray-900">
            Your Stats
          </h3>
          <button
            className="text-sm text-gray-700 font-bold"
            onClick={handleShowMore}
          >
            see all
          </button>
        </div>

        <div className="mt-6 flex flex-col items-center justify-center">
          {showMore
            ? mentors.map((item) => (
                <div>
                  <div className="flex justify-center items-center">
                    <div className="flex flex-row max-w-xl rounded-lg bg-white items-center">
                      <img
                        className=" w-[120px] h-[120px] object-cover rounded-lg"
                        src={item.photo}
                        alt={item.name}
                      />
                      <div className="py-6 pl-6 flex flex-col justify-start items-start">
                        <h5 className="text-gray-900 text-md font-medium mb-1 sm:text-sm">
                          {item.name}
                        </h5>
                        <p className="text-gray-700 text-sm leading-4 mb-4">
                          {item.desc}
                        </p>
                        <a href="#" className="text-green-600 text-xs">
                          SEE PROFILE
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : mentors.map((item) => (
                <div>
                  <div className="flex justify-center items-center">
                    <div className="flex flex-row max-w-xl rounded-lg bg-white items-center">
                      <img
                        className=" w-[120px] h-[120px] object-cover rounded-lg"
                        src={item.photo}
                        alt={item.name}
                      />
                      <div className="py-6 pl-6 flex flex-col justify-start items-start">
                        <h5 className="text-gray-900 text-md font-medium mb-1 sm:text-sm">
                          {item.name}
                        </h5>
                        <p className="text-gray-700 text-sm leading-4 mb-4">
                          {item.desc}
                        </p>
                        <a href="#" className="text-green-600 text-xs">
                          SEE PROFILE
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};
//   return (

//   );
// };

export default MentorPanel;
