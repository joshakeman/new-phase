import React from 'react'
import PhaseCard from './PhaseCard'
import punch from '../images/punch_lady.png'
import lunge from '../images/lunge_lady.png'
import silverFox from '../images/silver_fox.png'
import nutrition from '../images/nutrition_lady.png'

export default function PhaseCards() {
    return (
        <div class="phases-wrapper">
            <PhaseCard 
                title="Your New Phase Fitness"
                copy="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est eopksio laborum. Sed ut perspiciatis unde omnis istpoe natus error sit voluptatem accusantium"
                lady="punch"
                imgSrc={punch}
                path="/your-new-phase"
                direction="LEFT"
                />
            <PhaseCard 
                title="Parenthood Phase"
                copy="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est eopksio laborum. Sed ut perspiciatis unde omnis istpoe natus error sit voluptatem accusantium"
                lady="lunge"
                imgSrc={lunge}
                path="/parenthood-phase"
                direction="RIGHT"
                />
            <PhaseCard 
                title="Golden Phase"
                copy="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est eopksio laborum. Sed ut perspiciatis unde omnis istpoe natus error sit voluptatem accusantium"
                lady="silverFox"
                imgSrc={silverFox}
                path="/golden-phase"
                direction="LEFT"
                />
            <PhaseCard 
                title="Nutrition & Wellness"
                copy="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est eopksio laborum. Sed ut perspiciatis unde omnis istpoe natus error sit voluptatem accusantium"
                lady="nutrition"
                imgSrc={nutrition}
                path="/nutrition-and-wellness"
                direction="RIGHT"
                bumpLeft={true}
                />
        </div>
    )
}
