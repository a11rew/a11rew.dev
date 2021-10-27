import React from 'react'
import { Link, graphql, PageProps } from 'gatsby'
import styled from 'styled-components'

import Seo from '@components/seo'
import Bio from './components/bio'
import BlogLayout from './components/layout'

const BlogIndex: React.FC<BlogIndexProps> = ({ data, location }) => {
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <BlogLayout location={location}>
        <Seo title="All posts" />
        <Bio />
        <p>
          {`
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
          `}
        </p>
      </BlogLayout>
    )
  }

  return (
    <BlogLayout location={location}>
      <Seo title="Blog" />
      <Bio />
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <PostListItem itemScope itemType="http://schema.org/Article">
                <header>
                  <h2>
                    <Link to={post.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{post.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    // eslint-disable-next-line react/no-danger
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </PostListItem>
            </li>
          )
        })}
      </ol>
    </BlogLayout>
  )
}

export default BlogIndex

const PostListItem = styled.article`
  margin-bottom: var(--spacing-8);
  margin-top: var(--spacing-8);
`

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`

interface BlogIndexProps extends PageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
    allMarkdownRemark: {
      nodes: Array<{
        excerpt: string
        fields: {
          slug: string
        }
        frontmatter: {
          date: string
          title: string
          description: string
        }
      }>
    }
  }
}
