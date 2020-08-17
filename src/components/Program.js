import React from 'react'

export default function Program({ direction, imgSrc, title, copy}) {
    return (
        <div class="program-wrap">
            <h2>{title}</h2>
            <img src={imgSrc} />
            <p>{copy}</p>
        </div>
    )
}
