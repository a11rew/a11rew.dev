import React from 'react'
import styled from 'styled-components'

import Seo from '../components/Seo'
import IntroProse from '../components/IntroProse'
import SocialBanner from '../components/SocialBanner'

const Home: React.FC = () => {
  return (
    <Container>
      <Seo title="Hello" />
      <IntroProse />
      <SocialBanner />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-10);
`
export default Home
