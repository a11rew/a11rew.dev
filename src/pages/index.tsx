import React from 'react'
import styled from 'styled-components'
import GlobalStyles from '../variables.globals'

import Header from '../components/header'
import Seo from '../components/seo'
import IntroProse from '../components/introProse'
import SocialBanner from '../components/socialBanner'

const Home: React.FC = () => {
  return (
    <Container>
      <Seo title="Hello" />
      <GlobalStyles />
      <Header />
      <IntroProse />
      <SocialBanner />
    </Container>
  )
}

const Container = styled.div`
  padding: 50px 80px;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-10);
`
export default Home
