import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

import { ExternalLink } from '@components/socialBanner/socials'

const Bio: React.FC = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <StyledBio>
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={['auto', 'webp', 'avif']}
        src="../../../images/profile-pic.jpg"
        width={50}
        height={50}
        quality={95}
        alt="A picture of Andrew smiling"
      />
      {author?.name && (
        <div>
          <p>
            Written by <strong>{author.name}</strong>
          </p>
          <p>{author?.summary || null}</p>
          {` `}
          <TwitterBlock>
            <ExternalLink
              href={`https://twitter.com/${social?.twitter || ``}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              You should follow me on Twitter
            </ExternalLink>
          </TwitterBlock>
        </div>
      )}
    </StyledBio>
  )
}

const TwitterBlock = styled.div`
  margin-top: 4px;
`

const StyledBio = styled.div`
  display: flex;
  margin-bottom: var(--spacing-16);

  p {
    color: var(--color-text);
    margin-bottom: var(--spacing-0);
  }

  p:last-of-type {
    color: var(--color-text-secondary);
  }
`

export default Bio
