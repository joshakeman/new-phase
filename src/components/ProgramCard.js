import React from 'react'

export default function ProgramCard({ direction, imgSrc, title, copy}) {
    return (
        <div class="program-card">
            <h2>{title}</h2>
            <div class="content-wrap">
                <img src={imgSrc} />
                <div class="btn-para-wrap">
                    <p>{copy}</p>
                    <div class="btn">Learn More</div>
                </div>
            </div>
        </div>
    )
}
