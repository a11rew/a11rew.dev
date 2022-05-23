import React from 'react'
import { PageProps } from 'gatsby'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

import Header from '@components/Header'

const Layout: React.FC<PageProps> = ({ children, location }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {/* <motion.main
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          type: 'linear',
          duration: 0.2,
        }}
      > */}
      <Container>
        <Header />
        {children}
      </Container>
      {/* </motion.main> */}
    </AnimatePresence>
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
