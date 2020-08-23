import React from 'react'
import PhaseCard from './PhaseCard'
import punchLady from '../images/punch_lady.png'
import lungeLady from '../images/lunge_lady.png'
import silverFox from '../images/silver_fox.png'
import nutritionLady from '../images/nutrition_lady.png'

export default function PhaseCards() {
    return (
        <div class="phases-wrapper">
            <PhaseCard 
                title="Your New Phase Fitness"
                copy="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est eopksio laborum. Sed ut perspiciatis unde omnis istpoe natus error sit voluptatem accusantium"
                imgSrc={punchLady}
                direction="LEFT"
                />
            <PhaseCard 
                title="Parenthood Phase"
                copy="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est eopksio laborum. Sed ut perspiciatis unde omnis istpoe natus error sit voluptatem accusantium"
                imgSrc={lungeLady}
                direction="RIGHT"
                />
            <PhaseCard 
                title="Golden Phase"
                copy="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est eopksio laborum. Sed ut perspiciatis unde omnis istpoe natus error sit voluptatem accusantium"
                imgSrc={silverFox}
                direction="LEFT"
                />
            <PhaseCard 
                title="Nutrition & Wellness"
                copy="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est eopksio laborum. Sed ut perspiciatis unde omnis istpoe natus error sit voluptatem accusantium"
                imgSrc={nutritionLady}
                direction="RIGHT"
                />
        </div>
    )
}
