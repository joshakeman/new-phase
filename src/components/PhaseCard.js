import React from 'react'
import { Link } from "gatsby"

export default function PhaseCard({ direction, imgSrc, title, copy, path}) {
    return (
        <div class="phase-card">
            <h2>{title}</h2>
            <div class="phase-card-content-wrap">
                {direction === 'LEFT' ? (
                    <>
                    <img src={imgSrc} class="phase-card-img" />
                    <div class="btn-para-wrap">
                        <p class="phase-card-copy">{copy}</p>
                        <div class="btn margin-auto">
                            <Link to={path} class="link">Learn More</Link> 
                        </div>
                    </div>
                    </>
                ) : (
                    <div class="phase-card-mobile-flip">
                        <div class="btn-para-wrap">
                            <p class="phase-card-copy">{copy}</p>
                            <div class="btn margin-auto">
                                <Link to={path} class="link">Learn More</Link> 
                            </div>
                        </div>
                        <img src={imgSrc} class="phase-card-img" />
                    </div>
                )}
            </div>
        </div>
    )
}
