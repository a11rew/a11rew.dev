import { Link } from 'gatsby'
import React, { ReactElement } from 'react'
import styled from 'styled-components'
import GlitchyText from './GlitchyText'

const IntroProse: React.FC = (): ReactElement => {
  return (
    <StyledIntro>
      <h1>
        Hi there.
        <br />
        <GlitchTextWrapper>
          I&apos;m&nbsp;<GlitchyText>Andrew Glago.</GlitchyText>
        </GlitchTextWrapper>
      </h1>

      <p>
        👋 Software developer passionate about building performant applications
        for the web and beyond.
      </p>

      {/* <MoreInfoLink to="/about">
        <span>More about me</span>
        <div>⟶</div>
      </MoreInfoLink> */}
    </StyledIntro>
  )
}

const StyledIntro = styled.div`
  color: var(--color-text-primary);

  strong {
    color: var(--color-text);
  }

  h1 {
    font-weight: 700;
    font-size: var(--fontSize-5);
    line-height: 140%;
    color: unset;
    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  & > p {
    width: 95%;
    line-height: 150%;
    margin: 20px 0;

    @media (min-width: 1024px) {
      width: 50%;
    }
    font-size: var(--fontSize-2);
  }
`

const GlitchTextWrapper = styled.div`
  display: flex;
`

const MoreInfoLink = styled(Link)`
  font-size: var(--fontSize-1);
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 0.7rem;
  color: var(--color-primary);

  /* Bounce animation */
  @keyframes bounce {
    0% {
      transform: translate3d(0, 0, 0);
    }
    50% {
      transform: translate3d(10px, 0, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }

  & > div {
    animation: bounce 1.5s infinite;
  }

  &:hover {
    div {
      animation-play-state: paused;
    }
  }
`

export default IntroProse
