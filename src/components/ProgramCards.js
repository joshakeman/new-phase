import React from 'react'
import ProgramCard from './ProgramCard'
import punchLady from '../images/punch_lady.png'

export default function ProgramCards() {
    return (
        <div class="programs-wrapper">
            <ProgramCard 
                title="Your New Phase Fitness"
                copy="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est eopksio laborum. Sed ut perspiciatis unde omnis istpoe natus error sit voluptatem accusantium"
                imgSrc={punchLady}
                />
        </div>
    )
}
