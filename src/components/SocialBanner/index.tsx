import React, { ReactElement } from 'react'
import styled from 'styled-components'
import LastPlayed from './LastPlayed'

const SocialBanner: React.FC = (): ReactElement => {
  return (
    <BannerContainer>
      <LastPlayed />
    </BannerContainer>
  )
}

const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  @media (min-width: 600px) {
    flex-direction: row;
    /* justify-content: space-between; */
    justify-content: flex-end;
    gap: unset;
  }
`

export default SocialBanner
