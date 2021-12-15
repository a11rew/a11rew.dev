import React, { ReactElement } from 'react'
import styled from 'styled-components'

import Header from '@components/Header'
import ConstructionBanner from '@components/ConstructionBanner'

const Layout: React.FC = ({ children }): ReactElement => {
  return (
    <>
      <ConstructionBanner />
      <Container>
        <Header />
        {children}
      </Container>
    </>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 80%;
  margin: 0 auto;

  @media (min-width: 600px) {
    /* padding: 50px 80px; */
  }
`

export default Layout
