import React from 'react'
import styled from 'styled-components'
import scrollTo from '@utils/scrollTo'
import Socials from './SocialBanner/Socials'

const Footer = (): JSX.Element => {
  return (
    <StyledFooter>
      <div>
        <HelloBlock>
          <p>Say hello?</p>
          <p>
            Send me an email at <a href="mailto:hi@a11rew.dev">hi@a11rew.dev</a>
          </p>
        </HelloBlock>
        <div>
          <Socials />
        </div>
        <p>📍 Currently: Accra, Ghana and The Internet </p>
      </div>
      <ArrowBlock onClick={() => scrollTo('#header')}>
        <NavArrow />
      </ArrowBlock>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: 600px) {
    width: 90%;
  }
`

const HelloBlock = styled.div`
  p {
    margin-bottom: unset;
  }
  p:first-of-type {
    font-size: 32px;
    font-weight: 500;
  }
`

const ArrowBlock = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: unset;
  cursor: pointer;
`

const NavArrow = (): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="86"
    viewBox="0 0 16 86"
    fill="none"
  >
    <path
      d="M8 85L8 1"
      stroke="#065A82"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 8L8 1L1 8"
      stroke="#065A82"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default Footer
