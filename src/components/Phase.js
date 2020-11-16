import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Bullets from '../components/bullets'

export default function Phase({ lady, fontColor, title, copy }) {
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
                <Img
                className="phase-bkg"
                style={{width: '100%', position: 'absolute', zIndex: -10}} 
                fluid={data[lady].childImageSharp.fluid} />
                <div class="phase-wrapper">
                    <div class="phase-content">
                        <div class="phase-row-top">
                            <div className="phase-bullet-wrap">
                                <Bullets num={3} />
                            </div>
                        </div>
                        <div class="phase-row-bottom">
                            <div class="phase-row-bottom-col-l">

                            </div>
                            <div class="phase-row-bottom-col-r">
                                <div class="phase-copy">
                                    <h2 class={fontColor}>{title}</h2>
                                    <p class={fontColor}> {copy} </p>
                                </div>
                                <div class="button-testimonial-wrap">
                                    <div class="btn big-btn center">Free Consultation</div>
                                    <div class="testimonials">
                                        <p>"testimonials rotating: Annie is great" - Brad & Josh</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
                </>
            )
        }}
      />
    )
}
