import React from 'react'
import styled from 'styled-components'

const ConstructionBanner: React.FC = (): React.ReactElement => {
  return (
    <Wrapper>
      <strong>
        <a href="https://github.com/a11rew/a11rew.dev">Under construction</a>
      </strong>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: var(--banner-background);
  padding: 4px 0;
  color: black;
  line-height: 2rem;
  letter-spacing: 0.025rem;
  transition: background-color 500ms;

  strong {
    &::before {
      content: '🚧';
      margin-right: 6px;
    }
  }

  a {
    color: black;
  }
`

export default ConstructionBanner
