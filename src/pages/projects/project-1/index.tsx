import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Project1 = (): JSX.Element => {
  return (
    <Wrapper>
      <Background layoutId="anim-bg-1">
        <Container>
          <Heading layoutId="anim-heading-1">Project Card</Heading>
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
  background-color: #312666;
`

const Container = styled.div`
  z-index: 20;
  padding: var(--size-4);
`

const Heading = styled(motion.h1)`
  margin: unset;
  color: white;
`

export default Project1
