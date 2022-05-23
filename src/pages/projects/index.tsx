import React, { ReactElement } from 'react'
import styled from 'styled-components'
import Seo from '@components/Seo'
import Project1Card from './project-1/Project1Card'
import Project2Card from './project-2/Project2Card'

const Projects: React.FC = (): ReactElement => {
  return (
    <>
      <Seo title="Projects" />
      <h1>Projects.</h1>

      <ProjectsList>
        <Project1Card />
        <Project2Card />
      </ProjectsList>
    </>
  )
}

const ProjectsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`

export default Projects
