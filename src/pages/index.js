import React from "react"
import { Link, graphql } from "gatsby"
import jumbo from "../images/jumbo.png"
import backbone from '../images/big_backbone.png'

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

import Bullets from '../components/bullets'
import PhaseCards from '../components/PhaseCards'
import HiddenForm from '../components/hiddenForm'

const IndexPage = ({ data }) => {
  console.log(data)
  return(
  <Layout>
    <SEO title="Home" />
    <Img
    className="jumbo-bkg"
    fluid={data.jumbo.childImageSharp.fluid} />
    <div class="main-content">
      {/* <svg class="backbone" viewBox="2627.12 783.198 1379.939 3784.262">
        <path id="backbone" d="M 2768.18896484375 783.1979370117188 C 2768.18896484375 783.1979370117188 3105.86962890625 1771.6796875 2768.18896484375 2708.52392578125 C 2430.50830078125 3645.36865234375 2805.123046875 4567.4599609375 2805.123046875 4567.4599609375 L 3881.48046875 4567.4599609375 C 3881.48046875 4567.4599609375 3549.076171875 3866.67041015625 3881.48046875 2745.40771484375 C 4213.88525390625 1624.145141601563 3781.23193359375 783.1979370117188 3781.23193359375 783.1979370117188 L 2768.18896484375 783.1979370117188 Z">
        </path>
      </svg> */}
      {/* <img src={backbone} class="backbone" /> */}
      <div class="btn big-btn center mobile-consult-btn">
        Free Consultation
      </div>
      <Bullets />
      <PhaseCards />
    </div>
    
    <HiddenForm />
  </Layout>
  )
}

export const query = graphql`
  query {
    jumbo: file(relativePath: { eq: "jumbo.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
