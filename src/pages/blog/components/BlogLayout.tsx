import React from 'react'
import { PageRendererProps } from 'gatsby'
import styled from 'styled-components'

const BlogLayout: React.FC<PageRendererProps> = ({ children }) => {
  return (
    <>
      <Blog>{children}</Blog>
    </>
  )
}

const Blog = styled.main`
  color: var(--color-text);
`

export default BlogLayout
