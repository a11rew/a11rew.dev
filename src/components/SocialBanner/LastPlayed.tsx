import React, { ReactElement, useEffect, useState } from 'react'
import styled from 'styled-components'
import { BsSpotify } from 'react-icons/bs'

const LastPlayed: React.FC = (): ReactElement => {
  const [songData, setSongData] = useState<SongData>()

  interface SongData {
    songTitle: string
    songAlbum: string
    songArtist: string
    songHref: string
  }

  useEffect(() => {
    ;(async () => {
      try {
        const data: Response = await fetch(
          `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=a11rew&limit=1&api_key=${process.env.GATSBY_LAST_KEY}&format=json`
        )

        const res = await data.json()
        if (res.statusCode > 201) {
          throw Error(res.body.error.message)
        }

        const track = res.recenttracks.track[0]

        setSongData({
          songTitle: track.name,
          songAlbum: track.album['#text'],
          songArtist: track.artist['#text'],
          songHref: track.url,
        })
      } catch (error) {
        // console.log(error)
        setSongData({
          songTitle: 'Special Affair',
          songAlbum: 'Ego Death',
          songArtist: 'The Internet',
          songHref: 'https://open.spotify.com/track/3NWTRZ0A8xKlBP1qgNftql',
        })
      }
    })()
  }, [])

  return (
    <Container>
      <div>
        <h5>Last Played</h5>
        <a href={songData?.songHref} target="_blank" rel="noreferrer noopener">
          <HiddenDescription>
            Last.fm link to the song {songData?.songTitle} by{' '}
            {songData?.songArtist}{' '}
          </HiddenDescription>
          <BsSpotify size={20} />
        </a>
      </div>
      {songData ? (
        <>
          <SongTitle>{songData?.songTitle}</SongTitle>
          <SongInfo>
            <SongAlbum>{songData?.songAlbum}</SongAlbum>
            <SongArtist>{songData?.songArtist}</SongArtist>
          </SongInfo>
        </>
      ) : (
        <div>Loading</div>
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
  @media (max-width: 600px) {
    margin-top: 4px;
  }
`

const SongInfo = styled.div`
  display: flex;
  @media (min-width: 600px) {
    justify-content: flex-end;
  }
`

const SongAlbum = styled.span`
  color: var(--color-text-secondary);
  font-size: var(--fontSize-0);

  ::after {
    display: inline-block;
    content: '|';
    transform: rotate(25deg);
    padding: 0 5px;
  }
`

const SongArtist = styled.span`
  color: var(--color-text);
  font-size: var(--fontSize-0);
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