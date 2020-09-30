import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Bullets from '../components/bullets'

export default function Phase({ lady, fontColor, title }) {
    return (
        <StaticQuery
        query={graphql`
          query {
            towel: file(relativePath: { eq: "towel_lady_2466.png" }) {
              childImageSharp {
                fluid(maxWidth: 2000) {
                  ...GatsbyImageSharpFluid
                }
              }
            },
            hungry: file(relativePath: { eq: "hungry_lady_2240.png" }) {
                childImageSharp {
                    fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                    }
                }
            },
            pregnant: file(relativePath: { eq: "pregnant_lady_2023.png" }) {
                childImageSharp {
                    fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                    }
                }
            },
            dumbbell: file(relativePath: { eq: "dumbbell_lady_2025.png" }) {
                childImageSharp {
                    fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                    }
                }
            },
          }
        `}
        render={data => {
            console.log(fontColor)
            return(
                <>
                <Img style={{height: '100vh', width: '100vw', position: 'absolute', zIndex: -10}} fluid={data[lady].childImageSharp.fluid} />
                <Bullets />
                <div class="phase-wrapper">
                    <div class="phase-content">
                        <div class="phase-copy">
                            <h2 class={fontColor}>{title}</h2>
                            <p class={fontColor}>Lorem ipsum dolor sit amet, consectetur adipisifwcing elit, sed do eiusmod tempor incididunt ut labore et dolore roipi magna aliqua. Ut enim ad minim veeniam, quis nostruklad exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in tufpoy voluptate velit esse cillum dolore eu fugiat nulla parieratur. Excepteur sint.</p>
                            <div class="btn big-btn center">Free Consultation</div>
                        </div>
                        <div class="testimonials">
                            <p>"testimonials rotating: Annie is great" - Brad & Josh</p>
                        </div>
                    </div>
                </div>    
                </>
            )
        }}
      />
    )
}
