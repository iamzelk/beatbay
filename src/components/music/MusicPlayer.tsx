import React from "react";
import { cn } from "@/lib/utils";
import {
  HeartOutlineIcon,
  ShuffleIcon,
  BackwardIcon,
  PauseCircleIcon,
  ForwardIcon,
  RepeatOneIcon,
  VolumeHighIcon,
  MusicFilterIcon,
} from "@/components/icons";

interface MusicPlayerProps {
  className?: string;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ className }) => {
  const AlbumCover = () => (
    <div className="w-16 h-16 bg-gradient-to-br from-purple-400 via-pink-500 to-orange-400 rounded-xl" />
  );

  return (
    <div
      className={cn(
        "w-full h-28 bg-beatbay-black/64 backdrop-blur-[37px] border-t border-beatbay-active-dark/20",
        className,
      )}
    >
      {/* Progress Bar */}
      <div className="w-full h-1 relative">
        <div className="absolute inset-0 bg-beatbay-active-dark" />
        <div className="absolute left-0 top-0 h-full w-[581px] bg-white rounded-r-xl" />
      </div>

      {/* Player Content */}
      <div className="flex items-center justify-between px-8 py-6 h-[calc(100%-4px)]">
        {/* Current Song Info */}
        <div className="flex items-center gap-8 w-[291px]">
          <div className="flex items-center gap-4">
            <AlbumCover />
            <div className="space-y-1">
              <div className="text-white font-manrope text-lg font-semibold">
                Shape of You
              </div>
              <div className="text-beatbay-active-gray font-manrope text-sm">
                Ed Sheeran
              </div>
            </div>
          </div>
          <button className="text-white hover:text-beatbay-green transition-colors">
            <HeartOutlineIcon />
          </button>
        </div>

        {/* Player Controls */}
        <div className="flex items-center gap-6">
          <button className="text-white hover:text-beatbay-green transition-colors">
            <ShuffleIcon />
          </button>
          <button className="text-white hover:text-beatbay-green transition-colors">
            <BackwardIcon />
          </button>
          <button className="text-white hover:text-beatbay-green transition-colors">
            <PauseCircleIcon />
          </button>
          <button className="text-white hover:text-beatbay-green transition-colors">
            <ForwardIcon />
          </button>
          <button className="text-white hover:text-beatbay-green transition-colors">
            <RepeatOneIcon />
          </button>
        </div>

        {/* Volume & Time */}
        <div className="flex items-center gap-6">
          <span className="text-beatbay-light-gray font-manrope text-base text-right">
            1:45 / 4:42
          </span>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <VolumeHighIcon />
              <div className="w-[99px] h-1 bg-beatbay-active-dark rounded-full relative">
                <div className="absolute left-0 top-0 h-full w-[77px] bg-white rounded-full" />
              </div>
            </div>
            <button className="text-white hover:text-beatbay-green transition-colors">
              <MusicFilterIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
