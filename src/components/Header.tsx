import React from 'react'
import { Link } from 'gatsby'
import { useLocation } from '@reach/router'
import styled from 'styled-components'
import ThemeSwitch from './ThemeSwitch'

const Header: React.FC = () => {
  const { pathname } = useLocation()

  return (
    <StyledHeader id="header">
      <HomeTag>
        <NavLink to="/" $black>
          Andrew.
        </NavLink>
      </HomeTag>
      <Nav>
        <div>
          <NavLink to="/about" $active={pathname === '/about'}>
            about
          </NavLink>
        </div>
        <div>
          <NavLink to="/blog" $active={pathname === '/blog'}>
            blog
          </NavLink>
        </div>
        <div>
          <NavLink to="/projects" $active={pathname === '/projects'}>
            projects
          </NavLink>
        </div>
        <div>
          <NavLink to="/contact" $active={pathname === '/contact'}>
            contact
          </NavLink>
        </div>
        <div>
          <ThemeSwitch />
        </div>
      </Nav>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 40px 0;
  font-size: 1.1rem;
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

export const NavLink = styled(Link)<{ $black?: boolean; $active?: boolean }>`
  position: relative;
  text-decoration: none;

  ::after {
    display: block;
    content: '';
    border-bottom: ${props =>
      props.$black
        ? '2px solid var(--color-text)'
        : '2px solid var(--color-primary)'};
    transform: scaleX(0);
    transition: transform 0.4s ease;
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
  &::after {
    transform: ${({ $active }) => $active && 'scaleX(1)'};
  }
`

export default Header
