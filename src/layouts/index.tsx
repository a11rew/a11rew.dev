import React, { ReactElement } from 'react'
import styled from 'styled-components'

import Header from '@components/header'

const Layout: React.FC = ({ children }): ReactElement => {
  return (
    <Container className="flecked-bg" data-theme="white">
      <Header />
      {children}
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

export default Layout
