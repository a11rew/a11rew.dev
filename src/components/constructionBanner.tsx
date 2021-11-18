import React from 'react'
import styled from 'styled-components'

const ConstructionBanner = (): React.ReactElement => {
  return (
    <Wrapper>
      <strong>
        Under{' '}
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://github.com/a11rew/a11rew.dev"
        >
          construction
        </a>
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
  transition: background-color 1s;

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
