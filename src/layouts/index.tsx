import React, { ReactElement } from 'react'
import styled from 'styled-components'

import Header from '@components/Header'
import ConstructionBanner from '@components/ConstructionBanner'
import Footer from '@components/Footer'

const Layout: React.FC = ({ children }): ReactElement => {
  return (
    <>
      <ConstructionBanner />
      <Container>
        <Header />
        {children}
      </Container>
      <Footer />
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 80%;
  margin: 0 auto;

  @media (max-width: 600px) {
    width: 90%;
  }
`

export default Layout
