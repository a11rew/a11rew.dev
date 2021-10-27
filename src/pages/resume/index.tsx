import React, { ReactElement } from 'react'
// import { useStaticQuery, graphql } from 'gatsby'
// import { MDXRenderer } from 'gatsby-plugin-mdx'
import styled from 'styled-components'

const Resume: React.FC = (): ReactElement => {
  // const resumeData = useStaticQuery(resumeQuery)

  return (
    <>
      <ResumeBody>
        Coming soon :)
        {/* {resumeData && (
          <MDXRenderer>{resumeData.allMdx.nodes[0].body}</MDXRenderer>
        )} */}
      </ResumeBody>
    </>
  )
}

const ResumeBody = styled.div`
  p {
    /* margin: var(--spacing-0) var(--spacing-0) var(--spacing-4) var(--spacing-0); */
  }
`

export default Resume

// export const resumeQuery = graphql`
//   query {
//     allMdx(
//       sort: { order: DESC, fields: frontmatter___date }
//       limit: 1
//       filter: { fileAbsolutePath: { regex: "/resume/ig" } }
//     ) {
//       nodes {
//         id
//         slug
//         body
//       }
//     }
//   }
// `
