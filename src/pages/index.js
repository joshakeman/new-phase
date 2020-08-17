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
      <svg class="backbone" viewBox="2627.12 783.198 1379.939 3784.262">
        <path id="backbone" d="M 2768.18896484375 783.1979370117188 C 2768.18896484375 783.1979370117188 3105.86962890625 1771.6796875 2768.18896484375 2708.52392578125 C 2430.50830078125 3645.36865234375 2805.123046875 4567.4599609375 2805.123046875 4567.4599609375 L 3881.48046875 4567.4599609375 C 3881.48046875 4567.4599609375 3549.076171875 3866.67041015625 3881.48046875 2745.40771484375 C 4213.88525390625 1624.145141601563 3781.23193359375 783.1979370117188 3781.23193359375 783.1979370117188 L 2768.18896484375 783.1979370117188 Z">
        </path>
      </svg>
      <Bullets />
      <h2>Stuff</h2>
      <p>Fugiat ex cillum cupidatat Lorem ullamco mollit est est aute elit mollit. Non exercitation nulla fugiat velit eiusmod sint deserunt minim ea duis non enim duis nostrud. Amet culpa occaecat veniam id. Et cillum Lorem in fugiat deserunt commodo ex officia sint et id nostrud aliqua consequat. Dolore elit ad consequat nulla et est excepteur sint sunt aliquip eiusmod adipisicing eiusmod. Occaecat anim culpa quis eiusmod mollit dolor nostrud in proident nostrud excepteur consequat eiusmod.</p>
    </div>
  </Layout>
)

export default IndexPage
