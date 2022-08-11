import StatsPanel from "./StatsPanel";
import MentorPanel from "./MentorPanel";
import UpcomingPanel from "./UpcomingPanel";
import Card from "./Card";

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
      <div className="grid grid-cols-1 w-fit space-y-5 mt-5 place-self-auto self-center lg:grid-cols-2 lg:gap-4">
        <Card />
        <StatsPanel />
        <MentorPanel />
      </div>
    </div>
  );
};

export default AppContent;
