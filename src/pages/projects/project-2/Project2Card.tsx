import React from 'react'
import { navigate } from 'gatsby'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const Project2Card: React.FC = () => {
  return (
    <Container
      layoutId="anim-bg-2"
      onClick={() => navigate('/projects/project-2')}
    >
      <Heading layoutId="anim-heading-2">Project Card 2</Heading>
    </Container>
  )
}

const Container = styled(motion.div)`
  width: 100%;
  height: 30vh;
  background-color: #fcf492;
  padding: var(--size-4);
  border-radius: var(--size-3);
  text-decoration: none;
`

const Heading = styled(motion.h1)`
  font-size: var(--fontSize-2);
  margin: unset;
`

export default Project2Card
