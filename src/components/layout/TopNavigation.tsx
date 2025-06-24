import React from "react";
import { cn } from "@/lib/utils";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  SearchIcon,
  NotificationIcon,
} from "@/components/icons";

interface TopNavigationProps {
  className?: string;
}

const TopNavigation: React.FC<TopNavigationProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between w-full h-12 px-0",
        className,
      )}
    >
      {/* Navigation Controls */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-6">
          {/* Back Button */}
          <div className="p-3.5 bg-beatbay-gray rounded-xl">
            <ArrowLeftIcon />
          </div>

          {/* Breadcrumb */}
          <div className="flex items-center gap-2">
            <span className="text-beatbay-hover-gray font-manrope text-sm font-semibold">
              Home
            </span>
            <ArrowRightIcon />
            <span className="text-white font-manrope text-sm font-semibold">
              Popular Artist
            </span>
          </div>
        </div>
      </div>

      {/* Search & Notification */}
      <div className="flex items-center gap-6">
        {/* Search Bar */}
        <div className="flex items-center gap-3 bg-beatbay-gray rounded-xl px-4 py-3 w-[390px]">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search music, artist, albums..."
            className="bg-transparent text-beatbay-hover-gray font-manrope text-base placeholder:text-beatbay-hover-gray border-none outline-none flex-1"
          />
        </div>

        {/* Notification */}
        <div className="p-3.5 bg-beatbay-gray rounded-xl">
          <NotificationIcon />
        </div>
      </div>
    </div>
  );
};

export default TopNavigation;
