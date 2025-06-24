import React from "react";
import { cn } from "@/lib/utils";
import {
  PlayCircleIcon,
  HeadphoneIcon,
  ClockIcon,
  HeartOutlineIcon,
  MoreIcon,
} from "@/components/icons";

interface SongListItemProps {
  rank?: number | string;
  title: string;
  artist?: string;
  playCount: string;
  duration: string;
  isPlaying?: boolean;
  showPlayButton?: boolean;
  className?: string;
}

const SongListItem: React.FC<SongListItemProps> = ({
  rank,
  title,
  artist,
  playCount,
  duration,
  isPlaying = false,
  showPlayButton = false,
  className,
}) => {
  const AlbumCover = () => (
    <div className="w-[54px] h-[54px] bg-gradient-to-br from-purple-400 via-pink-500 to-orange-400 rounded-xl" />
  );

  return (
    <div className={cn("group", className)}>
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-6">
          {/* Rank or Play Button */}
          <div className="w-6 flex justify-center">
            {showPlayButton ? (
              <div className="w-6 h-6 text-white">
                <PlayCircleIcon />
              </div>
            ) : (
              <span
                className={cn(
                  "font-manrope text-base font-bold text-center",
                  isPlaying ? "text-beatbay-green" : "text-white",
                )}
              >
                {rank}
              </span>
            )}
          </div>

          {/* Song Info */}
          <div className="flex items-center gap-4">
            <AlbumCover />
            <div className="space-y-1">
              <div
                className={cn(
                  "font-manrope text-base font-bold w-[150px] truncate",
                  isPlaying ? "text-beatbay-green" : "text-white",
                )}
              >
                {title}
              </div>
              {artist && (
                <div className="text-beatbay-light-gray font-manrope text-sm">
                  {artist}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-14">
          {/* Play Count */}
          <div className="flex items-center gap-3">
            <HeadphoneIcon />
            <span className="text-white font-manrope text-base font-bold w-[120px] text-left">
              {playCount}
            </span>
          </div>

          {/* Duration */}
          <div className="flex items-center gap-3">
            <ClockIcon />
            <span className="text-white font-manrope text-base font-bold w-14 text-left">
              {duration}
            </span>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-5">
            <button className="text-white hover:text-beatbay-green transition-colors">
              <HeartOutlineIcon />
            </button>
            <button className="text-white hover:text-beatbay-green transition-colors">
              <MoreIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Separator */}
      <div className="mt-4 h-px bg-beatbay-active-dark/25 w-full" />
    </div>
  );
};

export default SongListItem;
