import React from 'react'
import Img from "gatsby-image"

export default function Bullet({ bulletText, icon }) {
    return (
        <div class="bullet-wrap">
            {/* <div class="bullet"/> */}
            <div class="bullet">
                <Img style={{}} fluid={icon} />
            </div>
            <h4 class="bullet-text">
                {bulletText}
            </h4>
        </div>
    )
}
