import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { FiTwitter, FiGithub } from 'react-icons/fi'

import { NavLink } from './header'

const SocialBanner: React.FC = (): ReactElement => {
  return (
    <SocialContainer>
      <h5>Get to know me</h5>
      <SocialList>
        <SocialItem>
          <NavLink
            to="https://github.com/a11rew"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </NavLink>
          <FiGithub />
        </SocialItem>
        <SocialItem last>
          <NavLink
            to="https://twitter.com/a11rew"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </NavLink>
          <FiTwitter />
        </SocialItem>
      </SocialList>
    </SocialContainer>
  )
}

const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;

  h5 {
    margin: unset;
    color: var(--color-text-secondary);
  }
`

const SocialList = styled.ul`
  display: flex;
`

const SocialItem = styled.li`
  display: flex;
  align-items: center;
  list-style-type: none;

  svg {
    margin-left: 0.5rem;
  }

  ::after {
    display: ${(props: { last?: boolean }) =>
      props.last ? 'none' : 'inline-block'};
    content: '|';
    transform: rotate(25deg);
    padding: 0 15px;
  }
`

export default SocialBanner
