import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

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
        <ProfileBlock>
          <p>
            Written by <strong>{author.name}</strong>
          </p>

          {author?.summary || null}
          {` `}
          <a href={`https://twitter.com/${social?.twitter || ``}`}>
            You should follow me on Twitter
          </a>
        </ProfileBlock>
      )}
    </StyledBio>
  )
}

const ProfileBlock = styled.div`
  a {
    display: block;
  }
`

const StyledBio = styled.div`
  display: flex;
  margin-bottom: var(--spacing-16);

  p {
    margin-bottom: var(--spacing-0);
  }
`

const BioAvatar = styled(StaticImage)`
  margin-right: var(--spacing-4);
  margin-bottom: var(--spacing-0);
  min-width: 50px;
  border-radius: 100%;
`

export default Bio
