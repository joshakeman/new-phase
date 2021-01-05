/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import footer from '../images/footer.png'
import logo from '../images/npf_logo.png'

import Header from "./phaseheader"
import "./layout.css"

const Layout = ({ children }) => {
//   const data = useStaticQuery(graphql`
//     query SiteTitleQuery {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `)

  return (
    <>
      <Header 
    //   siteTitle={data.site.siteMetadata.title} 
      />
      <div className="mobile-logo-wrap">
        <img className="mobile-logo" src={logo} />
      </div>
      <div className="phaselayout-wrap">
        <main>{children}</main>
        {/* <footer>
          <img className="footer-background" src={footer} />
        </footer> */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
