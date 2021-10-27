import React from 'react'
import styled from 'styled-components'

import Header from '../components/header'
import Seo from '../components/seo'
import IntroProse from '../components/introProse'
import SocialBanner from '../components/socialBanner'

const Home: React.FC = () => {
  return (
    <Container>
      <Seo title="Hello" />
      <Header />
      <IntroProse />
      <SocialBanner />
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-10);
  padding: 10px 20px;

  @media (min-width: 600px) {
    padding: 50px 80px;
  }
`
export default Home
