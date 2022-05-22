import React, { ReactElement } from 'react'
import styled from 'styled-components'
import Seo from '@components/Seo'

const Projects: React.FC = (): ReactElement => {
  return (
    <>
      <Seo title="Projects" />
      <ProjectsBody>
        <h1>Projects.</h1>
      </ProjectsBody>
    </>
  )
}

const ProjectsBody = styled.div``

export default Projects
