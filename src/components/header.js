import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from '../images/logo_w_words2.png'
import ModalButton from './ModalButton'

const Header = ({ siteTitle }) => (
  <>
  <header class="header-wrap">
      {/* <div id="nav-consultation-btn" class="btn big-btn">Free Consultation</div> */}
      <div class="logo">
        <img src={logo} />
        {/* <h4>customized fitness programming for your body & your phase of life</h4> */}
      </div>
  </header>
  <ModalButton isHeader={true} />
  <nav className="header-nav">
    <ul>
      <li><a href="/contact" class="np-link">Contact</a></li>
      <li><a href="/about-me" class="np-link">About</a></li>
      <li><a href="/blog" class="np-link">Blog</a></li>
    </ul>
  </nav>
  <svg class="header-bar" viewBox="357 0 1920 109.602">
    <path id="header-bar" d="M 2277.000244140625 109.6023406982422 L 2276.999267578125 109.6023406982422 C 2216.97412109375 105.8171005249023 2150.318359375 102.3737716674805 2078.883544921875 99.36805725097656 C 2006.8466796875 96.33686828613281 1929.458129882813 93.73043823242188 1848.86767578125 91.62114715576172 C 1766.773071289063 89.47257995605469 1680.659057617188 87.82138824462891 1592.917602539063 86.71400451660156 C 1502.818359375 85.57662963867188 1409.986206054688 84.99972534179688 1316.99951171875 84.99972534179688 C 1224.019775390625 84.99972534179688 1131.187866210938 85.57638549804688 1041.082153320313 86.71376800537109 C 953.31640625 87.82186126708984 867.20263671875 89.47281646728516 785.1326293945313 91.62114715576172 C 704.548095703125 93.73043823242188 627.1595458984375 96.33662414550781 555.11669921875 99.36782073974609 C 483.6945190429688 102.373291015625 417.03857421875 105.8163909912109 357.00048828125 109.6013870239258 L 357.00048828125 -3.984723662142642e-05 L 2277 -3.984723662142642e-05 L 2277.000244140625 109.6013870239258 L 2277.000244140625 109.6023406982422 Z">
    </path>
  </svg>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
