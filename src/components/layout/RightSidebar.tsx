import React from "react";
import { cn } from "@/lib/utils";
import { ArrowDownIcon, CrownIcon } from "@/components/icons";

interface RightSidebarProps {
  className?: string;
}

interface SongItem {
  title: string;
  artist: string;
  timeAgo: string;
  coverImage: string;
}

const RightSidebar: React.FC<RightSidebarProps> = ({ className }) => {
  const recentSongs: SongItem[] = [
    {
      title: "Perfect",
      artist: "Ed Sheeran",
      timeAgo: "2min ago",
      coverImage: "/placeholder-album.jpg",
    },
    {
      title: "Roman Picisan",
      artist: "Hanin Dhiya, Ah..",
      timeAgo: "8min ago",
      coverImage: "/placeholder-album.jpg",
    },
    {
      title: "Tittle (Deluxe)",
      artist: "Meghan Trainor",
      timeAgo: "2hr ago",
      coverImage: "/placeholder-album.jpg",
    },
    {
      title: "Shiver",
      artist: "Ed Sheeran",
      timeAgo: "6hr ago",
      coverImage: "/placeholder-album.jpg",
    },
    {
      title: "Feel Something",
      artist: "Jaymes Young",
      timeAgo: "11hr ago",
      coverImage: "/placeholder-album.jpg",
    },
    {
      title: "Shape of You",
      artist: "Ed Sheeran",
      timeAgo: "14 hr ago",
      coverImage: "/placeholder-album.jpg",
    },
    {
      title: "Bad Habits",
      artist: "Ed Sheeran",
      timeAgo: "20 hr ago",
      coverImage: "/placeholder-album.jpg",
    },
  ];

  const AlbumCover = ({
    className: coverClassName,
  }: {
    className?: string;
  }) => (
    <div
      className={cn(
        "bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg",
        coverClassName,
      )}
    />
  );

  const ProfileImage = () => (
    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full" />
  );

  const ArtistImage = () => (
    <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-500 rounded-xl" />
  );

  return (
    <div
      className={cn(
        "w-[298px] h-screen bg-beatbay-gray flex flex-col",
        className,
      )}
    >
      {/* Account Profile */}
      <div className="px-8 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <ProfileImage />
            <div className="space-y-1">
              <div className="text-white font-manrope text-base font-semibold">
                James Rodriguez
              </div>
              <div className="flex items-center gap-1">
                <span className="text-beatbay-hover-gray font-manrope text-xs">
                  Premium
                </span>
                <span className="text-beatbay-active-gray font-manrope text-xs">
                  •
                </span>
                <div className="w-4 h-4">
                  <CrownIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="w-4 h-4 text-white">
            <ArrowDownIcon />
          </div>
        </div>
      </div>

      {/* Fans Also Like */}
      <div className="px-8 mb-8">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-white font-manrope text-lg font-bold">
              Fans Also Like
            </h3>
            <span className="text-beatbay-green font-manrope text-base font-semibold">
              See All
            </span>
          </div>
          <div className="relative">
            <div className="w-full h-[234px] rounded-xl overflow-hidden">
              <ArtistImage />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black/64 backdrop-blur-sm rounded-b-xl p-4">
              <div className="space-y-1">
                <div className="text-white font-manrope text-sm font-semibold">
                  James Arthur
                </div>
                <div className="text-beatbay-light-gray font-manrope text-xs">
                  Artist
                </div>
              </div>
            </div>
          </div>
          {/* Slide indicators */}
          <div className="flex justify-center gap-4">
            <div className="w-2 h-2 bg-white rounded-full" />
            <div className="w-2 h-2 bg-white/40 rounded-full" />
            <div className="w-2 h-2 bg-white/40 rounded-full" />
            <div className="w-2 h-2 bg-white/40 rounded-full" />
          </div>
        </div>
      </div>

      {/* Recent Played */}
      <div className="px-8 flex-1">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-white font-manrope text-lg font-bold">
              Recent Played
            </h3>
            <span className="text-beatbay-green font-manrope text-base font-semibold">
              See All
            </span>
          </div>
          <div className="space-y-5 overflow-y-auto max-h-[400px]">
            {recentSongs.map((song, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <AlbumCover className="w-11 h-11" />
                  <div className="space-y-1">
                    <div className="text-white font-manrope text-sm font-bold w-[106px] truncate">
                      {song.title}
                    </div>
                    <div className="text-beatbay-light-gray font-manrope text-xs w-24 truncate">
                      {song.artist}
                    </div>
                  </div>
                </div>
                <div className="text-white font-manrope text-xs text-right w-14">
                  {song.timeAgo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
