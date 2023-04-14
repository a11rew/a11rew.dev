import React, { ReactElement } from "react";
import useSWR from "swr";

import SpotifyLogo from "@/assets/sprites/spotify.svg";

interface SongData {
  songTitle: string;
  songAlbum: string;
  songArtist: string;
  songHref: string;
}

const defaultSongData: SongData = {
  songTitle: "Empty Highways.",
  songAlbum: "Yellow",
  songArtist: "Shane Eagle",
  songHref: "https://www.last.fm/music/Shane+Eagle/Yellow/Empty+Highways.",
};

const fetchLastplayed = async (): Promise<SongData> => {
  const lastFMKey = process.env.NEXT_PUBLIC_LASTFM_KEY;

  if (!lastFMKey) {
    throw new Error("No LastFM API key found");
  }

  const data = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=a11rew&limit=1&api_key=${lastFMKey}&format=json`
  );
  const res = await data.json();
  const track = res.recenttracks.track[0];

  return {
    songTitle: track.name,
    songAlbum: track.album["#text"],
    songArtist: track.artist["#text"],
    songHref: track.url,
  };
};

const LastPlayed: React.FC = (): ReactElement => {
  const { data, error, isLoading } = useSWR("lp", fetchLastplayed);

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
