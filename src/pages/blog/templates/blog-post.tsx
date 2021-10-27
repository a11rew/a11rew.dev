import * as React from 'react'
import { Link, graphql, PageProps } from 'gatsby'
import styled from 'styled-components'

import Bio from '../components/bio'
import Layout from '../components/layout'
import Seo from '../../../components/seo'

const BlogPostTemplate: React.FC<BlogPostTemplateProps> = ({
  data,
  location,
}) => {
  const post = data.markdownRemark
  const { previous, next } = data

  return (
    <Layout location={location}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <BlogPost itemScope itemType="http://schema.org/Article">
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        </header>
        <section
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
        <footer>
          <Bio />
        </footer>
      </BlogPost>
      <BlogPostNav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </BlogPostNav>
    </Layout>
  )
}

export default BlogPostTemplate

const BlogPost = styled.article`
  header h1 {
    margin: var(--spacing-0) var(--spacing-0) var(--spacing-4) var(--spacing-0);
  }

  header p {
    font-size: var(--fontSize-2);
    font-family: var(--font-heading);
  }
`

const BlogPostNav = styled.nav`
  ul {
    margin: var(--spacing-0);
  }
`

interface BlogPostTemplateProps extends PageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
    markdownRemark: {
      id: string
      excerpt: string
      html: string
      frontmatter: {
        title: string
        date: string
        description: string
      }
    }
    previous: {
      fields: {
        slug: string
      }
      frontmatter: {
        title: string
      }
    }
    next: {
      fields: {
        slug: string
      }
      frontmatter: {
        title: string
      }
    }
  }
}

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
