import React, { ReactElement } from 'react'
import styled from 'styled-components'
import Seo from '@components/Seo'

const About: React.FC = (): ReactElement => {
  return (
    <>
      <Seo title="About" />
      <AboutBody>
        <h1>About.</h1>
      </AboutBody>
    </>
  )
}

const AboutBody = styled.div``

export default About
