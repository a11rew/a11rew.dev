import React, { ReactElement } from 'react'
import styled from 'styled-components'
import LastPlayed from './LastPlayed'

import Socials from './Socials'

const SocialBanner: React.FC = (): ReactElement => {
  return (
    <BannerContainer>
      <Socials />
      <LastPlayed />
    </BannerContainer>
  )
}

const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
    gap: unset;
  }
`

export default SocialBanner
