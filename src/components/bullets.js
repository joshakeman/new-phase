import React from 'react'
import Bullet from './bullet' 

export default function Bullets() {
    return (
        <div class="bullet-row">
            <Bullet bulletText={["Evidence-", <br></br>, "Based"]} />
            <Bullet bulletText={["Tailored", <br></br>, "Programming"]} />
            <Bullet bulletText={["Individualized", <br></br>, "Support"]} />
        </div>
    )
}
