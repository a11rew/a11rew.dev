import React, { ReactElement, useEffect, useState } from 'react'
import styled from 'styled-components'

const LastPlayed: React.FC = (): ReactElement => {
  const [songData, setSongData] = useState<SongData>()

  interface SongData {
    songTitle: string
    songAlbum: string
    songArtists: Array<{
      name: string
    }>
    songHref: string
  }

  useEffect(() => {
    ;(async () => {
      try {
        const data: Response = await fetch(
          'https://spotify-lp-lambda.herokuapp.com/lp'
        )

        const res = await data.json()
        if (res.statusCode > 201) {
          throw Error(res.body.error.message)
        }

        const { track } = res[0]

        setSongData({
          songTitle: track.name,
          songAlbum: track.album.name,
          songArtists: track.artists,
          songHref: track.external_urls.spotify,
        })
      } catch (error) {
        setSongData({
          songTitle: 'Palace/Curse',
          songAlbum: 'Ego Death',
          songArtists: [
            {
              name: 'The Internet',
            },
            {
              name: 'Steve Lacy',
            },
            {
              name: 'Tyler, The Creator',
            },
          ],
          songHref: 'https://open.spotify.com/track/300DUx4tdtCdGEUXR032jA',
        })
      }
    })()
  }, [])

  return (
    <Container>
      <h5>Last Played</h5>
      {songData ? (
        <>
          <SongTitle>{songData?.songTitle}</SongTitle>
          <SongInfo>
            <SongAlbum>{songData?.songAlbum}</SongAlbum>
            <SongArtist>{songData?.songArtists[0].name}</SongArtist>
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
  text-align: right;

  h5 {
    margin: unset;
    color: var(--color-text-secondary);
    margin-bottom: 8px;
  }
`

const SongTitle = styled.div`
  font-size: var(--fontSize-2);
`

const SongInfo = styled.div`
  display: flex;
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
  font-size: var(--fontSize-0);
`

export default LastPlayed
