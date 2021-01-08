import React from 'react'

import Layout from "../components/phaselayout"
import SEO from "../components/seo"

const Contact = ({ data }) => {
    console.log(data)
    return(
    <Layout>
      <SEO title="contact" />
      <div className="contact-wrap">
        <h1 className="amienne dark-gray">Have a question? I'd be happy to help.</h1>
        <h2 style={{textAlign:'center'}}>Email me at <a href="annie@mynewphasefitness.com">annie@mynewphasefitness.com</a></h2>
      </div>
    </Layout>
    )
  }

  export default Contact