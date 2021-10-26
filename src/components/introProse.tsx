import React, { ReactElement } from 'react'
import styled from 'styled-components'

const IntroProse: React.FC = (): ReactElement => {
  return (
    <StyledIntro>
      <p>
        Hi I&apos;m <strong>Andrew Glago</strong>, a{' '}
        <strong>software engineer</strong> from Accra, <strong>Ghana</strong>.
      </p>
      <p>
        I&apos;m <strong>passionate</strong> about building{' '}
        <strong>beautiful</strong>,{` `}
        <strong>performant</strong> applications for the web.
      </p>
    </StyledIntro>
  )
}

const StyledIntro = styled.div`
  font-size: var(--fontSize-4);
  color: var(--color-text-secondary);

  strong {
    color: var(--color-text);
  }
`

export default IntroProse
