import React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/phaselayout'
import annie from '../images/annie-headshot.png'
import Img from "gatsby-image"

export default function AboutMe({ data }) {
    console.log(data.annie.childImageSharp.fluid)
    return (
        <Layout>
            <div className="main-content about-me-content">
                <div className="about-col-l">
                    <img src={annie} />
                    {/* <Img
                    // className="jumbo-bkg"
                    fluid={data.annie.childImageSharp.fluid} /> */}
                </div>
                <div className="about-col-r">
                   <h1 className="Festivo">About Me</h1>
                   <img class="mobile-about-me-img" src={annie} />
                   <h4 style={{fontWeight: 100}}>
                   I am a certified personal trainer, women’s fitness specialist, pre-post natal fitness specialist, and nutrition coach.
                   </h4>
                   <br></br>
                   <h4 style={{fontWeight: 100}}>
                   My fitness journey began with a love of dance when I was two years old. I went on to major in Dance during college, and taught many classes for varying age groups.

                  </h4>
                   <br></br>
                   <h4 style={{fontWeight: 100}}>
                   After giving birth to my son, I experienced the lack of adequate physical fitness care available to women during times of transition, such as before and after giving birth and the time leading up to and following menopause. Women’s bodies undergo such powerful physical transformations, and I felt this fact often went unrecognized within the fitness industry.                   </h4>
                   <br></br>
                   <h4 style={{fontWeight: 100}}>
                   Women are not always given the kind of tailored exercise programming they truly need. This thought led me to create New Phase Fitness in the hopes of providing the kind of support that everyone deserves during these pivotal phases.                   </h4>
                   <br></br>
                   <div className="qualifications">
                    <h6>B.A. in Dance from Franklin & Marshall College</h6>

                    <h6>Certified Personal Trainer, National Academy of Sports Medicine, NCCA accredited</h6>

                    <h6>Certified Nutrition Coach, National Academy of Sports Medicine</h6>

                    <h6>Certified Women's Health Specialist, National Academy of Sports Medicine</h6>

                    <h6>Pre/Postnatal Performance Training Specialist, ProNatal Fitness</h6>

                   </div>
                </div>
            </div>
        </Layout>
    )
}

export const query = graphql`
  query {
    annie: file(relativePath: { eq: "annie-headshot.png" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
