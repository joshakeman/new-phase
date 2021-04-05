import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Bullets from '../components/bullets'
import ModalButton from '../components/ModalButton'
import footer from '../images/footer.png'
import footerLogo from '../images/footer_icon.png'

export default function Phase({ lady, background, fontColor, title, copy }) {
    return (
        <StaticQuery
        query={graphql`
          query {
            yoga: file(relativePath: { eq: "yoga_mat_2460.jpg" }) {
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
                        <h1 class="mobile-jumbo-title">{title}</h1>
                    </div>
                    <div class="phase-content">
                        <div className="phase-bullet-wrap">
                            <div className="contain-bullets">
                                <Bullets num={3} fontColor={fontColor}/>
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
                                    <p>Annie is a fabulous trainer. She tailors individual routines to meet specific goals. It's also great to work with her because I can use simple equipment at home rather than going to the gym. I highly recommend her. --Neeley Gossett  .......   Working with Annie has been a pleasure. I initially sought help for chronic low back tightness and a loss of core and muscle strength. At sixty five I realized going forward was going to require something more than my daily hikes! Also, a diagnosis of osteoporosis was a concern. Annie carefully took my health history and listened respectfully to my needs. She prepared several excellent workout routines tailor made just for me, and made sure I understood correct alignment. She also uses a training app that has been extremely helpful to visually demonstrate and remind me of each exercise. Together we have steadily made consistent progress and I continue to get stronger and feel better each day. Thank you for the friendly and supportive atmosphere you create and I hope to continue for years to come. -Margaret H.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
                {/* <footer className="phase-footer">
                    <img className="footer-background" src={footer} />
                </footer> */}
                </>
            )
        }}
      />
    )
}
