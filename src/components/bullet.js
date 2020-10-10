import React from 'react'
import Img from "gatsby-image"

export default function Bullet({ size, bulletText, icon }) {
    return (
        <div class="bullet-wrap">
            <div class={`${size}-bullet`}>
                <Img style={{}} fluid={icon} />
            </div>
            <h4 class={`${size}-bullet-text`}>
                {bulletText}
            </h4>
        </div>
    )
}
