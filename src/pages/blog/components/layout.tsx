import React from 'react'
import { PageRendererProps } from 'gatsby'
import Layout from '@components/layout'
import Header from '@components/header'

const BlogLayout: React.FC<PageRendererProps> = ({ children }) => {
  return (
    <Layout>
      <Header />
      <main>{children}</main>
    </Layout>
  )
}

export default BlogLayout
