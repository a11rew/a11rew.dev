import React from 'react'
import { graphql, PageProps } from 'gatsby'

import Seo from '@components/Seo'
import Bio from './components/Bio'
import BlogLayout from './components/BlogLayout'

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
      <div>I haven&apos;t written anything yet, check back soon :)</div>
      {/* <ol style={{ listStyle: `none` }}>
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
      </ol> */}
    </BlogLayout>
  )
}

export default BlogIndex

// const PostListItem = styled.article`
//   margin-bottom: var(--spacing-8);
//   margin-top: var(--spacing-8);

//   h2 {
//     color: var(--color-primary);
//   }

//   small {
//     color: var(--color-text-secondary);
//   }

//   p {
//     color: var(--color-text);
//   }
// `

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: ASC }
      limit: 1000
      filter: {
        fileAbsolutePath: { regex: "/blog/" }
        fields: { slug: { regex: "/^((?!t$mp).)*$/" } }
      }
    ) {
      nodes {
        id
        fields {
          slug
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
