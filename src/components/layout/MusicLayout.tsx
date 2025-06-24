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
      <div className="flex flex-1 h-screen overflow-hidden">
        {/* Left Sidebar */}
        <LeftSidebar />

        {/* Main Content */}
        <MainContent className="flex-1 overflow-y-auto" />

        {/* Right Sidebar */}
        <RightSidebar />
      </div>

      {/* Music Player */}
      <MusicPlayer className="fixed bottom-0 left-0 right-0 z-50" />
    </div>
  );
};

export default MusicLayout;
