import React from "react"
import { Link } from "gatsby"
import jumbo from "../images/jumbo.png"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Bullets from '../components/bullets'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <img src={jumbo} class="jumbo"/>
    <div class="main-content">
      <Bullets />
    </div>
  </Layout>
)

export default IndexPage
