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
                copy="A woman’s body undergoes many powerful physical transformations. I believe women deserve
                more than a “one-size-fits all” approach to their physical health."
                lady="punch"
                imgSrc={punch}
                path="/your-new-phase"
                direction="LEFT"
                />
            <PhaseCard 
                title="Parenthood Phase"
                copy="The motherhood journey is one of the most high-intensity events a body can go through. I believe the physical demands of
                giving birth deserves more than a “one-size fits all” approach to exercise."
                lady="lunge"
                imgSrc={lunge}
                path="/parenthood-phase"
                direction="RIGHT"
                />
            <PhaseCard 
                title="Golden Phase"
                copy="As your body changes, you will need to adapt your fitness regime to meet the needs of your new phase of life. Exercise that is proprioceptively challenging is proven to be better for women as they age."
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
