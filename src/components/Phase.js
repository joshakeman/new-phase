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
            </div>
            </>
        )}
      />
    )
}
