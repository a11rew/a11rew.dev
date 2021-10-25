import React from "react"
import { graphql, PageProps } from "gatsby"

import Layout from "./blog/components/layout"
import Seo from "../components/seo"

const NotFoundPage: React.FC<Props> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="404: Not Found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

interface Props extends PageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}
