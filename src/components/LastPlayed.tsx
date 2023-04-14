import React, { ReactElement } from "react";

import SpotifyLogo from "@/assets/sprites/spotify.svg";
import { defaultSongData, useFetchLastPlayed } from "@/hooks/music";

const LastPlayed: React.FC = (): ReactElement => {
  const { data, error, isLoading } = useFetchLastPlayed();

  if (error) {
    console.error(error);
  }

  const songData = data ?? defaultSongData;

  return (
    <div className="space-y-1 min-h-[140px]">
      <div>
        <a href={songData.songHref} target="_blank" rel="noreferrer noopener">
          <p className="sr-only">
            Last.fm link to the song {songData.songTitle} by{" "}
            {songData.songArtist}{" "}
          </p>
          <SpotifyLogo size={20} />
        </a>
        <h2 className="mt-2">{isLoading ? "Loading..." : "Last played"}</h2>
      </div>
      {!isLoading && (
        <p className="font-bold">
          {songData.songArtist} / {songData.songTitle}
        </p>
      )}
    </div>
  );
};

export default LastPlayed;
