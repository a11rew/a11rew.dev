import React from 'react'
import styled from 'styled-components'

import Seo from '../components/seo'
import IntroProse from '../components/introProse'
import SocialBanner from '../components/socialBanner'

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
