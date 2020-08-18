import React from 'react'

export default function ProgramCard({ direction, imgSrc, title, copy}) {
    return (
        <div class="program-card">
            <h2>{title}</h2>
            <div class="content-wrapper">
                <img src={imgSrc} />
                <p>{copy}</p>
            </div>
        </div>
    )
}
