import React from "react";
import { cn } from "@/lib/utils";

interface AlbumCardProps {
  title: string;
  subtitle: string;
  className?: string;
}

const AlbumCard: React.FC<AlbumCardProps> = ({
  title,
  subtitle,
  className,
}) => {
  const AlbumCover = () => (
    <div className="w-[118px] h-[118px] bg-gradient-to-br from-purple-400 via-pink-500 to-orange-400 rounded-xl" />
  );

  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <AlbumCover />
      <div className="space-y-1">
        <div className="text-white font-manrope text-sm font-semibold w-[118px] truncate">
          {title}
        </div>
        <div className="text-beatbay-light-gray font-manrope text-xs w-[118px] truncate">
          {subtitle}
        </div>
      </div>
    </div>
  );
};

export default AlbumCard;
