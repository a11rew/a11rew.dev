import useSWR from "swr";

interface SongData {
  songTitle: string;
  songAlbum: string;
  songArtist: string;
  songHref: string;
}

export const defaultSongData: SongData = {
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

export const useFetchLastPlayed = () => useSWR<SongData>("lp", fetchLastplayed);

interface TopAlbum {
  name: string;
  artist: string;
  image: string;
  url: string;
}

export const defaultTopAlbums: TopAlbum[] = [
  {
    name: "What Happens in Lagos",
    artist: "Ajebutter22",
    image:
      "https://lastfm.freetls.fastly.net/i/u/500x500/a4f43609e9c695f1ebc9432a1ce6befd.jpg",
    url: "https://www.last.fm/music/Ajebutter22/What+Happens+in+Lagos",
  },
  {
    name: "Yellow",
    artist: "Shane Eagle",
    image:
      "https://lastfm.freetls.fastly.net/i/u/500x500/d685252aa9017a688dbe3c74952e9eb7.jpg",
    url: "https://www.last.fm/music/Shane+Eagle/Yellow",
  },
  {
    name: "let the sun talk",
    artist: "Mavi",
    image:
      "https://lastfm.freetls.fastly.net/i/u/500x500/d0bae8889cb8d1f4dce5b0eb0ea14f7c.jpg",
    url: "https://www.last.fm/music/Mavi/let+the+sun+talk",
  },
];
const fetchTopAlbums = async (): Promise<TopAlbum[]> => {
  const lastFMKey = process.env.NEXT_PUBLIC_LASTFM_KEY;

  if (!lastFMKey) {
    throw new Error("No LastFM API key found");
  }

  const data = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&period=7day&user=a11rew&limit=3&api_key=${lastFMKey}&format=json`
  );

  const res = await data.json();
  const albums = res.topalbums.album;

  return albums.map(
    (album: {
      name: string;
      artist: { name: string };
      image: { [x: string]: string }[];
      url: string;
      mbid: string;
    }) => ({
      name: album.name,
      artist: album.artist.name,
      image: album.image.slice(-1)[0]["#text"].replace("300x300", "500x500"), // Get the last image (largest
      url: album.url,
    })
  );
};

export const useFetchTopAlbums = () =>
  useSWR<TopAlbum[]>("ta", fetchTopAlbums, {
    loadingTimeout: 1000 * 5, // 5 seconds
  });
