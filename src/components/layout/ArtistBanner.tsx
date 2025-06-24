import React from "react";
import { cn } from "@/lib/utils";
import { VerifiedIcon, HeadphoneIcon, CheckIcon } from "@/components/icons";

interface ArtistBannerProps {
  className?: string;
}

const ArtistBanner: React.FC<ArtistBannerProps> = ({ className }) => {
  const ArtistImage = () => (
    <div className="w-[351px] h-[318px] bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 rounded-xl" />
  );

  return (
    <div
      className={cn(
        "w-full h-[295px] rounded-2xl overflow-hidden relative",
        className,
      )}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 via-blue-900/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-between p-14">
          <div className="space-y-4">
            {/* Verified Badge */}
            <div className="flex items-center gap-3">
              <VerifiedIcon />
              <span className="text-beatbay-light-gray font-manrope text-base font-medium">
                Verified Artist
              </span>
            </div>

            {/* Artist Name */}
            <h1 className="text-white font-manrope text-5xl font-bold leading-[150%]">
              Ed Sheeran
            </h1>

            {/* Monthly Listeners */}
            <div className="flex items-center gap-3">
              <HeadphoneIcon />
              <span className="text-beatbay-hover-gray font-manrope text-base">
                <span className="text-white font-bold">82,736,050</span> monthly
                listeners
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <button className="bg-beatbay-green hover:bg-beatbay-green/90 transition-colors rounded-full px-6 py-3.5">
              <span className="text-white font-manrope text-base font-bold uppercase tracking-[0.64px]">
                Play
              </span>
            </button>
            <button className="border border-white hover:bg-white/10 transition-colors rounded-full px-6 py-3.5 flex items-center gap-3">
              <CheckIcon />
              <span className="text-white font-manrope text-base font-bold uppercase tracking-[0.64px]">
                Following
              </span>
            </button>
          </div>
        </div>

        {/* Artist Image */}
        <div className="flex items-center justify-center pr-14 py-3">
          <ArtistImage />
        </div>
      </div>
    </div>
  );
};

export default ArtistBanner;
