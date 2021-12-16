import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { BsSpotify } from 'react-icons/bs'
import useSWR from 'swr'

const fetchLastplayed = async (): Promise<SongData> => {
  const data = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=a11rew&limit=1&api_key=${process.env.GATSBY_LAST_KEY}&format=json`
  )
  const res = await data.json()
  const track = res.recenttracks.track[0]

  return {
    songTitle: track.name,
    songAlbum: track.album['#text'],
    songArtist: track.artist['#text'],
    songHref: track.url,
  }
}

interface SongData {
  songTitle: string
  songAlbum: string
  songArtist: string
  songHref: string
}

const LastPlayed: React.FC = (): ReactElement => {
  const { data, error } = useSWR('lp', fetchLastplayed)

  return (
    <Container>
      <div>
        <h5>Last Played</h5>
        <a href={data?.songHref} target="_blank" rel="noreferrer noopener">
          <HiddenDescription>
            Last.fm link to the song {data?.songTitle} by {data?.songArtist}{' '}
          </HiddenDescription>
          <BsSpotify size={20} />
        </a>
      </div>
      {data && !error && (
        <>
          <SongTitle>{data?.songTitle}</SongTitle>
          <SongInfo>
            <SongAlbum>{data?.songAlbum}</SongAlbum>
            <SongArtist>{data?.songArtist}</SongArtist>
          </SongInfo>
        </>
      )}

      {error && !data && (
        <>
          <SongTitle>Special Affair</SongTitle>
          <SongInfo>
            <SongAlbum>Ego Death</SongAlbum>
            <SongArtist>The Internet</SongArtist>
          </SongInfo>
        </>
      )}

      {!data && !error && (
        <>
          <SongTitle>Loading</SongTitle>
          {/* Placeholder to deal with layout shift */}
          <SongInfo style={{ visibility: 'hidden' }}>
            <SongAlbum>Ego Death</SongAlbum>
            <SongArtist>The Internet</SongArtist>
          </SongInfo>
        </>
      )}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 600px) {
    text-align: right;
  }

  div:first-of-type {
    display: flex;
    a {
      margin-left: var(--spacing-2);
      display: flex;
    }
    @media (min-width: 600px) {
      align-self: flex-end;
    }
  }

  h5 {
    margin: unset;
    color: var(--color-text-secondary);
    margin-bottom: 8px;
    align-self: center;
    @media (max-width: 600px) {
      margin-bottom: unset;
    }
  }
`

const SongTitle = styled.div`
  color: var(--color-text);
  font-size: var(--fontSize-2);
  @media (max-width: 768px) {
    margin-top: 4px;
    font-size: var(--fontSize-1);
  }
`

const SongInfo = styled.div`
  display: flex;
  @media (min-width: 768px) {
    justify-content: flex-end;
  }
`

const SongAlbum = styled.span`
  color: var(--color-text-secondary);
  font-size: var(--fontSize-1);

  @media (max-width: 768px) {
    font-size: var(--fontSize-1);
  }

  ::after {
    display: inline-block;
    content: '|';
    transform: rotate(25deg);
    padding: 0 5px;
  }
`

const SongArtist = styled.span`
  color: var(--color-text);
  font-size: var(--fontSize-1);
`

const HiddenDescription = styled.span`
  border: 0;
  padding: 0;
  margin: 0;
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(
    1px 1px 1px 1px
  ); /* IE6, IE7 - a 0 height clip, off to the bottom right of the visible 1px box */
  clip: rect(
    1px,
    1px,
    1px,
    1px
  ); /*maybe deprecated but we need to support legacy browsers */
  clip-path: inset(
    50%
  ); /*modern browsers, clip-path works inwards from each corner*/
  white-space: nowrap; /* added line to stop words getting smushed together (as they go onto seperate lines and some screen readers do not understand line feeds as a space */
`

export default LastPlayed
