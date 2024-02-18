"use client";

import { response } from "@/lib/mock.json";
import {
  Award,
  CircleUserRound,
  LogOut,
  Menu,
  MessageCircle,
} from "lucide-react";
import { useState } from "react";
import Leaderboard from "./leaderboard";
import RadialProgress from "./ui/radial-progress";

type Props = {};

const Navbar = (props: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between p-8 px-10">
        <div className="flex items-center space-x-2 tracking-tight">
          <MessageCircle className="h-7 w-7 text-[#8BC34A]" />
          <span className="text-2xl font-light">
            Chat<span className="font-semibold">SAT</span>
          </span>
        </div>
        <div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu
              className={`h-7 w-7 ${isMenuOpen ? "text-green-500" : "text-gray-500"}`}
            />
          </button>
        </div>
      </div>
      <div>
        {isMenuOpen && (
          <aside className="h-full w-full space-y-6 rounded-md bg-gray-400 bg-opacity-10 bg-clip-padding p-6 mix-blend-screen shadow-lg backdrop-blur-sm backdrop-filter">
            <div className="glass-backdrop-blend w-full">New Thread</div>
            <div className="rounded-2xl shadow-lg">
              <div className="glass-backdrop-blend flex flex-wrap items-center justify-center gap-5 backdrop-blur-lg">
                <RadialProgress />
                <div className="flex flex-col items-center justify-center gap-4">
                  <span className="flex items-center justify-center text-3xl font-medium">
                    <Award className="h-10 w-10" fill="#9CCC65" /> 0/223
                    <span className="pl-1 font-semibold text-accent">XP</span>
                  </span>
                  <button className="btn inset-0 border-0 bg-gray-500 text-sm text-accent shadow-inner shadow-blue-100 duration-500 hover:shadow-none">
                    Take a Quiz
                  </button>
                </div>
              </div>
            </div>
            <Leaderboard />
            <div className="flex items-center justify-between">
              <div className="btn btn-ghost flex items-center justify-start">
                <CircleUserRound className="h-8 w-8" />
                <span className="text-xl">{response.user.name}</span>
              </div>
              <div className="btn btn-ghost flex items-center justify-start space-x-2 text-sm">
                <LogOut className="h-5 w-5" /> Sign Out
              </div>
            </div>
          </aside>
        )}
      </div>
    </>
  );
};

export default Navbar;
