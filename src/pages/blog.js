import React from 'react'

import Layout from "../components/phaselayout"
import SEO from "../components/seo"

const Blog = ({ data }) => {
    console.log(data)
    return(
    <Layout>
      <SEO title="blog" />
      <div className="blog-content">
        <h1 className="amienne dark-gray">The New Phase blog is under construction.</h1>
      </div>
    </Layout>
    )
  }

  export default Blog