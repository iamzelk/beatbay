import React from "react";
import { cn } from "@/lib/utils";
import {
  HomeIcon,
  DiscoverIcon,
  RadioIcon,
  AlbumIcon,
  MicrophoneIcon,
  MusicSquareAddIcon,
  HeartIcon,
  FolderIcon,
  NoteSquareIcon,
  PlusIcon,
} from "@/components/icons";

interface LeftSidebarProps {
  className?: string;
}

interface NavItem {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
}

interface PlaylistItem {
  icon: React.ReactNode;
  label: string;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({ className }) => {
  const navigationItems: NavItem[] = [
    { icon: <HomeIcon />, label: "Home", isActive: true },
    { icon: <DiscoverIcon />, label: "Discover" },
    { icon: <RadioIcon />, label: "Radio" },
    { icon: <AlbumIcon />, label: "Albums" },
    { icon: <MicrophoneIcon />, label: "Podcast" },
  ];

  const libraryItems: PlaylistItem[] = [
    { icon: <MusicSquareAddIcon />, label: "Recently Added" },
    { icon: <HeartIcon />, label: "Favorite Songs" },
    { icon: <FolderIcon />, label: "Local Files" },
  ];

  const playlistItems: PlaylistItem[] = [
    { icon: <NoteSquareIcon />, label: "Lo-fi Music" },
    { icon: <NoteSquareIcon />, label: "Best of Bon Jovi" },
    { icon: <NoteSquareIcon />, label: "Best of John Mayer" },
  ];

  return (
    <div
      className={cn(
        "w-[270px] h-screen bg-beatbay-gray flex flex-col",
        className,
      )}
    >
      {/* Logo */}
      <div className="px-8 py-8">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-beatbay-green rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">B</span>
          </div>
          <span className="text-white font-manrope font-bold text-xl">
            BeatBay
          </span>
        </div>
      </div>

      {/* Navigation */}
      <div className="px-8 mb-8">
        <div className="space-y-6">
          {navigationItems.map((item, index) => (
            <div key={index} className="relative">
              {item.isActive && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/6 to-transparent rounded-l-none" />
                  <div className="absolute right-0 top-0 w-1.5 h-full bg-beatbay-green rounded-l-md" />
                </>
              )}
              <div className="flex items-center gap-4 relative z-10 px-8 py-3 -mx-8">
                <div
                  className={cn(
                    "w-6 h-6",
                    item.isActive
                      ? "text-beatbay-green"
                      : "text-beatbay-light-gray",
                  )}
                >
                  {item.icon}
                </div>
                <span
                  className={cn(
                    "font-manrope text-base font-semibold",
                    item.isActive ? "text-white" : "text-beatbay-light-gray",
                  )}
                >
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Library */}
      <div className="px-8 mb-8">
        <div className="space-y-6">
          <h3 className="text-beatbay-light-gray font-manrope text-xs font-bold uppercase tracking-[1.92px]">
            Library
          </h3>
          <div className="space-y-6">
            {libraryItems.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-6 h-6 text-beatbay-light-gray">
                  {item.icon}
                </div>
                <span className="text-beatbay-light-gray font-manrope text-base font-medium">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Playlist */}
      <div className="px-8 flex-1">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-beatbay-light-gray font-manrope text-xs font-bold uppercase tracking-[1.92px]">
              Playlist
            </h3>
            <div className="w-4 h-4 text-white">
              <PlusIcon />
            </div>
          </div>
          <div className="space-y-6">
            {playlistItems.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-6 h-6 text-beatbay-light-gray">
                  {item.icon}
                </div>
                <span className="text-beatbay-light-gray font-manrope text-base font-medium">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
