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

import Header from "./header"
import "./layout.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="mobile-logo-wrap">
        <img className="mobile-logo" src={logo} />
      </div>
      <div>
        <main>{children}</main>
        {/* <footer>
          <svg class="footer" viewBox="1012.497 0 1949.006 134.001">
            <path id="footer" d="M 2961.5029296875 134.0004730224609 L 1012.496704101563 134.0004730224609 C 1043.24853515625 123.7026977539063 1075.901489257813 113.7829742431641 1109.5478515625 104.5146408081055 C 1143.28515625 95.22103118896484 1178.804931640625 86.36658477783203 1215.120239257813 78.19686126708984 C 1251.613159179688 69.98714447021484 1289.756469726563 62.27797698974609 1328.490600585938 55.28297424316406 C 1367.5009765625 48.23853302001953 1408.02490234375 41.75353240966797 1448.936279296875 36.00797653198242 C 1490.2314453125 30.20908737182617 1532.89208984375 25.02742004394531 1575.73291015625 20.60714340209961 C 1619.061401367188 16.13658714294434 1663.615600585938 12.33742046356201 1708.157836914063 9.315476417541504 C 1753.288452148438 6.253531932830811 1799.4931640625 3.9160315990448 1845.487915039063 2.367976188659668 C 1892.168701171875 0.7968650460243225 1939.7802734375 -7.941351941553876e-05 1986.999389648438 -7.941351941553876e-05 C 2034.218994140625 -7.941351941553876e-05 2081.830322265625 0.7968650460243225 2128.51123046875 2.367976188659668 C 2174.506103515625 3.9160315990448 2220.710693359375 6.253531932830811 2265.84130859375 9.315476417541504 C 2310.3837890625 12.33742046356201 2354.938232421875 16.13658714294434 2398.2666015625 20.60714340209961 C 2441.108154296875 25.0276985168457 2483.7685546875 30.20908737182617 2525.0634765625 36.00797653198242 C 2565.975341796875 41.75353240966797 2606.4990234375 48.23853302001953 2645.5087890625 55.28297424316406 C 2684.24267578125 62.27797698974609 2722.385986328125 69.98714447021484 2758.87939453125 78.19686126708984 C 2795.19482421875 86.36658477783203 2830.714599609375 95.22103118896484 2864.451904296875 104.5146408081055 C 2898.109619140625 113.7860336303711 2930.76025390625 123.7057571411133 2961.4970703125 133.99853515625 L 2961.499755859375 133.9994201660156 L 2961.5029296875 133.9982604980469 L 2961.5029296875 134.0004730224609 Z">
            </path>
          </svg>
        </footer> */}
      </div>
      <footer>
        <img className="footer-background" src={footer} />
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
