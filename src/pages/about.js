import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function About({data}) {
  const page = data.site.siteMetadata;
  return (
    <Layout>
      <SEO title='About' description={page.description} />
      <h1>About {data.site.siteMetadata.title}</h1>
      <p>
        This site is running on your computer dedicated to showing the
        best photos and videos of pandas.
      </p>
    </Layout>
  )
}


export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`