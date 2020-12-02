import React from 'react'
import Img from "gatsby-image"

export default function Bullet({ size, bulletText, icon, fontColor }) {
    return (
        <div class="bullet-wrap">
            <div class={`${size}-bullet`}>
                <Img style={{}} fluid={icon} />
            </div>
            <h4 class={`${size}-bullet-text ${fontColor}`}>
                {bulletText}
            </h4>
        </div>
    )
}
