import React from "react";
import { cn } from "@/lib/utils";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
import MainContent from "./MainContent";
import MusicPlayer from "../music/MusicPlayer";

interface MusicLayoutProps {
  className?: string;
}

const MusicLayout: React.FC<MusicLayoutProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "min-h-screen bg-beatbay-black font-manrope flex flex-col",
        className,
      )}
    >
      {/* Main Layout */}
      <div className="flex flex-1 h-[calc(100vh-112px)] overflow-hidden">
        {/* Left Sidebar */}
        <LeftSidebar className="hidden lg:flex" />

        {/* Main Content */}
        <MainContent className="flex-1 overflow-y-auto" />

        {/* Right Sidebar */}
        <RightSidebar className="hidden xl:flex" />
      </div>

      {/* Music Player */}
      <MusicPlayer className="mt-auto" />
    </div>
  );
};

export default MusicLayout;
