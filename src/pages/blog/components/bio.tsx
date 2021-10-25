/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

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

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
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
    </div>
  )
}

const ProfileBlock = styled.div`
  a {
    display: block;
  }
`

export default Bio
