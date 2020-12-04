import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Bullets from '../components/bullets'
import ModalButton from '../components/ModalButton'
import footer from '../images/footer.png'

export default function Phase({ lady, background, fontColor, title, copy }) {
    return (
        <StaticQuery
        query={graphql`
          query {
            towel: file(relativePath: { eq: "towel_lady_2466.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 2000) {
                  ...GatsbyImageSharpFluid
                }
              }
            },
            hungry: file(relativePath: { eq: "hungry_lady_2240_tinted.jpg" }) {
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
                {/* <Img
                className="phase-bkg"
                style={{width: '100%', position: 'absolute', zIndex: -10}} 
                fluid={data[lady].childImageSharp.fluid} /> */}
                <div class={`phase-wrapper ${background}`}>
                    <div class={`mobile-phase-bkg ${background}`}>
                        <h1>{title}</h1>
                    </div>
                    <div class="phase-content">
                        <div className="phase-bullet-wrap">
                            <div className="contain-bullets">
                                <Bullets num={3} fontColor="dark-gray"/>
                            </div>
                        </div>
                        <div class="">
                            <div class="phase-copy">
                                <h2 class={fontColor}>{title}</h2>
                                <p class={fontColor}> {copy} </p>
                            </div>
                            <div class="button-testimonial-wrap">
                                <ModalButton />
                                <div class="testimonials">
                                    <p>"testimonials rotating: Annie is great" - Brad & Josh</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
                <footer>
                    <img className="footer-background" src={footer} />
                </footer>
                </>
            )
        }}
      />
    )
}
