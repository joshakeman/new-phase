import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Phase() {
    return (
        <StaticQuery
        query={graphql`
          query {
            towelLady: file(relativePath: { eq: "towel_lady_2466.png" }) {
              childImageSharp {
                fluid(maxWidth: 2000) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => (
            <>
            <Img style={{height: '100vh', width: '100vw', position: 'absolute'}} fluid={data.towelLady.childImageSharp.fluid} />
            <div class="phase-content">
                <h2>Your New Phase of Fitness</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisifwcing elit, sed do eiusmod tempor incididunt ut labore et dolore roipi magna aliqua. Ut enim ad minim veeniam, quis nostruklad exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in tufpoy voluptate velit esse cillum dolore eu fugiat nulla parieratur. Excepteur sint.</p>
                <div class="btn big-btn">Free Consultation</div>
            </div>
            <div class="testimonials">
                <p>"testimonials rotating: Annie is great" - Brad & Josh</p>
            </div>
            </>
        )}
      />
    )
}
