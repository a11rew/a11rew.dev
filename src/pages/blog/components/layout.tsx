import React from 'react'
import { PageRendererProps } from 'gatsby'

const BlogLayout: React.FC<PageRendererProps> = ({ children }) => {
  return (
    <>
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
