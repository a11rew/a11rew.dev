import React from 'react'
import styled from 'styled-components'

import Seo from '../components/Seo'
import IntroProse from '../components/IntroProse'
import SocialBanner from '../components/SocialBanner'

const Home: React.FC = () => {
  return (
    <Container>
      <Seo title="Hello" />
      <IntroContainer>
        <IntroProse />
      </IntroContainer>
      <SocialBanner />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex: 1;
  padding-bottom: 40px;

  flex-direction: column;
  gap: var(--spacing-10);
`

const IntroContainer = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
`
export default Home
