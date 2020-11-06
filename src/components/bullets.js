import React from 'react'
import Bullet from './bullet'
import { StaticQuery, graphql } from "gatsby"


export default function Bullets(props) {
    // return (
    //     <div class="bullet-row">
    //         <Bullet bulletText={["Evidence-", <br></br>, "Based"]} />
    //         <Bullet bulletText={["Tailored", <br></br>, "Programming"]} />
    //         <Bullet bulletText={["Individualized", <br></br>, "Support"]} />
    //     </div>
    // )

    return (
        <StaticQuery
        query={graphql`
          query {
            apple: file(relativePath: { eq: "icons/apple.png" }) {
              childImageSharp {
                fluid(maxWidth: 2000) {
                  ...GatsbyImageSharpFluid
                }
              }
            },
            chart: file(relativePath: { eq: "icons/chart.png" }) {
                childImageSharp {
                    fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                    }
                }
            },
            dbell: file(relativePath: { eq: "icons/dbell.png" }) {
                childImageSharp {
                    fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                    }
                }
            },
            pencil: file(relativePath: { eq: "icons/pencil.png" }) {
                childImageSharp {
                    fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                    }
                }
            },
            phone: file(relativePath: { eq: "icons/phone.png" }) {
                childImageSharp {
                    fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                    }
                }
            },
            tape: file(relativePath: { eq: "icons/tape.png" }) {
                childImageSharp {
                    fluid(maxWidth: 2000) {
                    ...GatsbyImageSharpFluid
                    }
                }
            },
          }
        `}
        render={data => {
            console.log(data)
            return(
                props.num === 3 
                ? (
                <div class="bullet-row bullet-row-top">
                    <Bullet size="small" bulletText={["Individualized", <br></br>, "Training"]} icon={data['dbell'].childImageSharp.fluid}/>
                    <Bullet size="small" bulletText={["Tailored", <br></br>, "Programming"]} icon={data['pencil'].childImageSharp.fluid}/>
                    <Bullet size="small" bulletText={["Personal", <br></br>, "Interests"]} icon={data['tape'].childImageSharp.fluid}/>
                </div>
                )
                : (
                <div class="homepage-bullets">
                    <div class="bullet-row bullet-row-top">
                        <Bullet size="big" bulletText={["Individualized", <br></br>, "Training"]} icon={data['dbell'].childImageSharp.fluid}/>
                        <Bullet size="big" bulletText={["Tailored", <br></br>, "Programming"]} icon={data['pencil'].childImageSharp.fluid}/>
                        <Bullet size="big" bulletText={["Personal", <br></br>, "Interests"]} icon={data['tape'].childImageSharp.fluid}/>
                    </div>
                    <div class="bullet-row">
                        <Bullet size="big" bulletText={["Evidence-", <br></br>, "Based"]} icon={data['chart'].childImageSharp.fluid}/>
                        <Bullet size="big" bulletText={["Individualized", <br></br>, "Support"]} icon={data['phone'].childImageSharp.fluid} />
                        <Bullet size="big" bulletText={["Nutritional", <br></br>, "Support"]} icon={data['apple'].childImageSharp.fluid} />
                    </div>
                </div>
                )
            )
        }}
      />
    )
}
