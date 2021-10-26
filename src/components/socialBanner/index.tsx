import React, { ReactElement } from 'react'
import styled from 'styled-components'
import LastPlayed from './lastPlayed'

import Socials from './socials'

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
  justify-content: space-between;
`

export default SocialBanner
