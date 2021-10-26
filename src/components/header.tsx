import React, { ReactElement } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Header: React.FC = (): ReactElement => {
  return (
    <StyledHeader>
      <HomeTag>
        <NavLink to="/">Andrew.</NavLink>
      </HomeTag>
      <Nav>
        <div>
          <NavLink to="/about">about</NavLink>
        </div>
        <div>
          <NavLink to="/blog">blog</NavLink>
        </div>
        <div>
          <NavLink to="/resume">resume</NavLink>
        </div>
        <div>
          <NavLink to="/projects">projects</NavLink>
        </div>
      </Nav>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 4px;
  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
    gap: unset;
  }
`

const HomeTag = styled.div`
  font-size: var(--fontSize-4);
  a {
    text-decoration: none;
    color: var(--color-text);
  }
`

const Nav = styled.nav`
  display: flex;
  gap: 1em;

  div {
    display: flex;
    align-items: center;
  }
`

export const NavLink = styled(Link)`
  position: relative;
  text-decoration: none;
  ::after {
    display: block;
    content: '';
    border-bottom: 2px solid var(--color-text);
    transform: scaleX(0);
    transition: transform 0.25s ease;
    transform-origin: 0 50%;
    left: 0;
    bottom: 0px;
    width: 100%;
    display: block;
    position: absolute;
  }
  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`

export default Header
