import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

// Custom 404 display page
const NotFound = () => {
  return (
    <Layout>
      <h1>Page not found</h1>
      <p>
        <Link to="/">Go Back</Link>
      </p>
    </Layout>
  )
}

export default NotFound