import React, { ReactElement } from 'react'
import styled from 'styled-components'
import Seo from '@components/Seo'

const About: React.FC = (): ReactElement => {
  return (
    <>
      <Seo title="About" />
      <AboutBody>Coming soon :)</AboutBody>
    </>
  )
}

const AboutBody = styled.div``

export default About
