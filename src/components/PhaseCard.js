import React from 'react'
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default function PhaseCard({ direction, imgSrc, lady, title, copy, path, bumpLeft}) {

    return (
        <StaticQuery
        query={graphql`
          query {
            punch: file(relativePath: { eq: "punch_lady.png" }) {
              childImageSharp {
                fluid(maxWidth: 2000) {
                  ...GatsbyImageSharpFluid
                }
              }
            },
            lunge: file(relativePath: { eq: "lunge_lady.png" }) {
                childImageSharp {
                    fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                    }
                }
            },
            silverFox: file(relativePath: { eq: "silver_fox.png" }) {
                childImageSharp {
                    fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                    }
                }
            },
            nutrition: file(relativePath: { eq: "nutrition_lady.png" }) {
                childImageSharp {
                    fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                    }
                }
            },
          }
        `}
        render={data => {
            console.log(data["lunge"])
            return(
                <div class="phase-card">
                    <h2
                    style={ bumpLeft ? {left: 300} : {left: 360}}
                    >{title}</h2>
                    <div class="phase-card-content-wrap">
                        {direction === 'LEFT' ? (
                            <>
                            <img src={imgSrc} class="phase-card-img" />
                            {/* <Img
                            className="phase-card-img"
                            fluid={data[lady].childImageSharp.fluid} /> */}
                            <div class="btn-para-wrap">
                                <p class="phase-card-copy">{copy}</p>
                                <div class="np-btn margin-auto">
                                    <Link to={path} class="np-link">Learn More</Link> 
                                </div>
                            </div>
                            </>
                        ) : (
                            <div class="phase-card-mobile-flip">
                                <div class="btn-para-wrap">
                                    <p class="phase-card-copy">{copy}</p>
                                    <div class="np-btn margin-auto">
                                        <Link to={path} class="np-link">Learn More</Link> 
                                    </div>
                                </div>
                                <img src={imgSrc} class="phase-card-img" />
                                {/* <Img
                                className="phase-card-img"
                                fluid={data[lady].childImageSharp.fluid} /> */}
                            </div>
                        )}
                    </div>
                </div>
            )
        }}
    />
    )
}
