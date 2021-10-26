import React, { ReactElement } from 'react'
import styled from 'styled-components'

const LastPlayed: React.FC = (): ReactElement => {
  return (
    <Container>
      <h5>Last Played</h5>
      <SongTitle>Big Mad</SongTitle>
      <SongInfo>
        <SongAlbum>The Gamble</SongAlbum>
        <SongArtist>M.anifest</SongArtist>
      </SongInfo>
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
