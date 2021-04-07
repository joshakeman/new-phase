import React from 'react'
import PhaseCard from './PhaseCard'
import punch from '../images/happy_punch_lady.png'
import lunge from '../images/lunge_lady.png'
import silverFox from '../images/silver_fox.png'
import nutrition from '../images/eating_pregnant.png'

export default function PhaseCards() {
    return (
        <div class="phases-wrapper">
            <PhaseCard 
                title="Your New Phase of Fitness"
                copy="A woman’s body undergoes powerful physical transformations depending on phase of life. From adolescence to parenthood to menopause, women deserve more than a “one-size-fits all” approach to their health and wellness."
                lady="punch"
                imgSrc={punch}
                path="/your-new-phase"
                direction="LEFT"
                />
            <PhaseCard 
                title="Parenthood Phase"
                copy="The motherhood journey is one of the most high-intensity athletic events of a lifetime.
                The physical demands of giving birth plus the stresses of new parenthood requires specialized fitness programming delivered with attention and care."
                lady="lunge"
                imgSrc={lunge}
                path="/parenthood-phase"
                direction="RIGHT"
                />
            <PhaseCard 
                title="Golden Phase"
                copy="As your body changes, you will benefit from adapting your fitness regime to meet the needs of this new phase. Proprioceptively challenging exercise is proven to be beneficial during this time of life."
                lady="silverFox"
                imgSrc={silverFox}
                path="/golden-phase"
                direction="LEFT"
                />
            <PhaseCard 
                title="Nutrition & Wellness"
                copy="Whether your goal is to lose weight, gain muscle, or simply get healthier I can provide the education and support you need."
                lady="nutrition"
                imgSrc={nutrition}
                path="/nutrition-and-wellness"
                direction="RIGHT"
                bumpLeft={true}
                />
        </div>
    )
}
