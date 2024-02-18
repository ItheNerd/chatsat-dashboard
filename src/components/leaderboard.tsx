import { response } from "@/lib/mock.json";
import { Award } from "lucide-react";

type Props = {};

const Leaderboard = (props: Props) => {
  return (
    <div className="glass-backdrop-blend flex flex-col space-y-2 p-0">
      <span className="glass-backdrop-blend w-full bg-gray-300 bg-opacity-10 shadow-[inset_0px_-5px_30px_rgba(255,255,255,0.1)]">
        Leaderboard
      </span>
      <div className="h-full w-full space-y-2 overflow-y-auto rounded-lg p-3">
        <div className="h-48 w-full space-y-2 overflow-y-auto rounded-lg">
          {response.leaderboard.map((leaders, index) => (
            <div
              className="glass-backdrop-blend flex w-full items-center justify-between bg-gray-300 bg-opacity-10 p-4 shadow-[inset_0px_-5px_30px_rgba(255,255,255,0.05)] hover:bg-[#3C3C3C]"
              key={index}
            >
              <div className="flex items-center space-x-2">
                <span className="font-semibold text-accent">{leaders.rank}.</span>
                <Award className="h-5 w-5 text-[#FFC107]" fill="#FFC107" />
                <span className="text-sm">{leaders.name}</span>
              </div>
              <span className="">
                {leaders.score}/233{" "}
                <span className="pl-1 font-semibold text-accent">XP</span>
              </span>
            </div>
          ))}
        </div>
        <div className="glass-backdrop-blend flex w-full items-center justify-between bg-opacity-10 bg-gradient-to-b from-lime-300/20 to-sky-400/20 p-4">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-accent">
              {response.user.rank}.
            </span>
            <Award className="h-5 w-5 text-[#FFC107]" fill="#FFC107" />
            <span className="text-sm">You</span>
          </div>
          <span className="">
            {response.user.score}/233{" "}
            <span className="pl-1 font-semibold text-accent">XP</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
