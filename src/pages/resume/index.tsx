import React, { ReactElement } from 'react'
// import { useStaticQuery, graphql } from 'gatsby'
// import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '@components/layout'
import Header from '@components/header'
import styled from 'styled-components'
import Bio from '@pages/blog/components/bio'

const Resume: React.FC = (): ReactElement => {
  // const resumeData = useStaticQuery(resumeQuery)

  return (
    <Layout>
      <Header />
      <Bio />
      <ResumeBody>
        Coming soon :)
        {/* {resumeData && (
          <MDXRenderer>{resumeData.allMdx.nodes[0].body}</MDXRenderer>
        )} */}
      </ResumeBody>
    </Layout>
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
