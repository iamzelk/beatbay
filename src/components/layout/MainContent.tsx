import React from "react";
import { cn } from "@/lib/utils";
import TopNavigation from "./TopNavigation";
import ArtistBanner from "./ArtistBanner";
import AlbumCard from "../music/AlbumCard";
import SongListItem from "../music/SongListItem";

interface MainContentProps {
  className?: string;
}

const MainContent: React.FC<MainContentProps> = ({ className }) => {
  const popularReleases = [
    { title: "Divide", subtitle: "2017 • Album" },
    { title: "X", subtitle: "2015 • Album" },
    { title: "No 6", subtitle: "2019 • Album" },
    { title: "Equals", subtitle: "2021 • Album" },
    { title: "Peru", subtitle: "Latest Releases • S.." },
    { title: "Multiply", subtitle: "2014 • Album" },
  ];

  const popularSongs = [
    {
      rank: "1",
      title: "Shiver",
      playCount: "1,952,015,881",
      duration: "3:27",
    },
    {
      rank: "2",
      title: "Shape of You",
      playCount: "3,024,067,930",
      duration: "4:07",
      isPlaying: true,
      showPlayButton: true,
    },
    {
      rank: "3",
      title: "Bad Habits",
      playCount: "2,014,068,150",
      duration: "5:42",
    },
  ];

  return (
    <div className={cn("flex-1 px-4 lg:px-8 py-8 space-y-8", className)}>
      {/* Top Navigation */}
      <TopNavigation />

      {/* Artist Banner */}
      <ArtistBanner />

      {/* Popular Releases */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-white font-manrope text-xl font-bold">
            Popular Releases
          </h2>
          <span className="text-beatbay-green font-manrope text-base font-semibold">
            See All
          </span>
        </div>
        <div className="flex gap-5 overflow-x-auto pb-2 scrollbar-hide">
          {popularReleases.map((album, index) => (
            <AlbumCard
              key={index}
              title={album.title}
              subtitle={album.subtitle}
              className="flex-shrink-0"
            />
          ))}
        </div>
      </div>

      {/* Popular Songs */}
      <div className="space-y-6">
        <h2 className="text-white font-manrope text-xl font-bold">
          Popular Song
        </h2>
        <div className="space-y-4">
          {popularSongs.map((song, index) => (
            <SongListItem
              key={index}
              rank={song.rank}
              title={song.title}
              playCount={song.playCount}
              duration={song.duration}
              isPlaying={song.isPlaying}
              showPlayButton={song.showPlayButton}
            />
          ))}
        </div>
        {/* Shadow effect */}
        <div className="h-[87px] bg-gradient-to-r from-transparent via-white/12 to-transparent" />
      </div>
    </div>
  );
};

export default MainContent;
