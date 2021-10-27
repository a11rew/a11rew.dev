import React from 'react'
import styled from 'styled-components'
import { FiTwitter, FiGithub } from 'react-icons/fi'

const Socials: React.FC = () => {
  return (
    <SocialContainer>
      <h5>Get to know me</h5>
      <SocialList>
        <SocialItem>
          <ExternalLink
            href="https://github.com/a11rew"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </ExternalLink>
          <FiGithub />
        </SocialItem>
        <SocialItem last>
          <ExternalLink
            href="https://twitter.com/a11rew"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </ExternalLink>
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
  @media (max-width: 600px) {
    margin-top: 4px;
  }
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

export const ExternalLink = styled.a`
  position: relative;
  text-decoration: none;
  ::after {
    display: block;
    content: '';
    border-bottom: 2px solid var(--color-primary);
    transform: scaleX(0);
    transition: transform 0.35s ease;
    transform-origin: right;
    left: 0;
    bottom: -4px;
    width: 100%;
    display: block;
    position: absolute;
  }
  &:hover::after {
    transform: scaleX(1);
    transform-origin: 0;
  }
`

export default Socials
