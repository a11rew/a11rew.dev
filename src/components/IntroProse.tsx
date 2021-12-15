import React, { ReactElement } from 'react'
import styled from 'styled-components'

const IntroProse: React.FC = (): ReactElement => {
  return (
    <StyledIntro>
      <h1>
        Hey, there.
        <br />
        I&apos;m Andrew Glago.
      </h1>
      <p>
        👋 Software developer passionate about building beautiful, performant
        applications for the web and mobile.
      </p>
    </StyledIntro>
  )
}

const StyledIntro = styled.div`
  font-size: var(--fontSize-5);
  color: var(--color-text-primary);

  strong {
    color: var(--color-text);
  }

  h1 {
    font-weight: 300;
    font-size: 5rem;
    line-height: 140%;
    color: unset;
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  p {
    width: 95%;
    line-height: 150%;
    margin: 20px 0;
    font-weight: 300;

    @media (min-width: 1024px) {
      width: 50%;
    }

    @media (max-width: 768px) {
      font-size: var(--fontSize-2);
    }
  }
`

export default IntroProse
