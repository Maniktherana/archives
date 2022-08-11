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
          {showMore ? (
            mentors.map((item) => (
              <div>
                <div className="flex justify-center items-center">
                  <div className="flex flex-row max-w-xl rounded-lg bg-white items-center">
                    <img
                      className=" w-[120px] h-[120px] object-cover rounded-lg"
                      src={item.photo}
                      alt={item.name}
                    />
                    <div className="p-6 flex flex-col justify-start items-start">
                      <h5 className="text-gray-900 text-md font-medium mb-1">
                        {item.name}
                      </h5>
                      <p className="text-gray-700 text-base mb-4">
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
          ) : (
            <div>
              <div className="flex justify-center">
                <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
                  <img
                    className=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                    src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
                    alt=""
                  />
                  <div className="p-6 flex flex-col justify-start">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">
                      Card title
                    </h5>
                    <p className="text-gray-700 text-base mb-4">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="text-gray-600 text-xs">
                      Last updated 3 mins ago
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
//   return (

//   );
// };

export default MentorPanel;
