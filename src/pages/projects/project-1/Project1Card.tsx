import React from 'react'
import { navigate } from 'gatsby'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const Project1Card: React.FC = () => {
  return (
    <Container
      layoutId="anim-bg-1"
      onClick={() => navigate('/projects/project-1')}
    >
      <Heading layoutId="anim-heading-1">Project Card 1</Heading>
    </Container>
  )
}

const Container = styled(motion.div)`
  width: 100%;
  height: 30vh;
  background-color: #312666;
  color: white;
  padding: var(--size-4);
  border-radius: var(--size-3);
  text-decoration: none;
`

const Heading = styled(motion.h1)`
  font-size: var(--fontSize-2);
  margin: unset;
  color: white;
`

export default Project1Card
