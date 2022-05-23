import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Project2 = (): JSX.Element => {
  return (
    <Wrapper>
      <Background layoutId="anim-bg-2">
        <Container>
          <Heading layoutId="anim-heading-2">Project Card 2</Heading>
        </Container>
      </Background>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
`

const Background = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  min-width: 100vw;
  min-height: 100vh;
  width: 100%;
  height: 100%;
  z-index: 10;
  background-color: #fcf492;
`

const Container = styled.div`
  z-index: 20;
  padding: var(--size-4);
`

const Heading = styled(motion.h1)`
  margin: unset;
`

export default Project2
