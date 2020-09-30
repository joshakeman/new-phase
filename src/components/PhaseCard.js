import React from 'react'
import { Link } from "gatsby"

export default function PhaseCard({ direction, imgSrc, title, copy, path}) {
    return (
        <div class="phase-card">
            <h2>{title}</h2>
            <div class="content-wrap">
                {direction === 'LEFT' ? (
                    <>
                    <img src={imgSrc} />
                    <div class="btn-para-wrap">
                        <p>{copy}</p>
                        <div class="btn margin-auto">
                            <Link to={path} class="link">Learn More</Link> 
                        </div>
                    </div>
                    </>
                ) : (
                    <>
                    <div class="btn-para-wrap">
                        <p>{copy}</p>
                        <div class="btn margin-auto">
                            <Link to={path} class="link">Learn More</Link> 
                        </div>
                    </div>
                    <img src={imgSrc} />
                    </>
                )}
            </div>
        </div>
    )
}
