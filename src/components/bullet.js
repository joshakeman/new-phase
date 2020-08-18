import React from 'react'

export default function Bullet({ bulletText }) {
    return (
        <div class="bullet-wrap">
            <div class="bullet"/>
            <h4 class="bullet-text">
                {bulletText}
            </h4>
        </div>
    )
}
