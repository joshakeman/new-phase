import React from 'react'
import Layout from '../components/phaselayout'
import annie from '../images/annie-headshot.jpg'

export default function AboutMe() {
    return (
        <Layout>
            <div className="main-content about-me-content">
                <div className="about-col-l">
                    <img src={annie} />
                </div>
                <div className="about-col-r">
                   <h1 className="Festivo">About Me</h1>
                   <img class="mobile-about-me-img" src={annie} />
                   <h4 style={{fontWeight: 100}}>
                   I am a certified personal trainer, women’s health specialist, pre-post natal fitness specialist, and nutrition coach.
                   </h4>
                   <br></br>
                   <h4 style={{fontWeight: 100}}>
                   My fitness journey began with a love of dance when I was two years old. I went on to major in Dance in college, and taught many classes for varying age groups. 
                   </h4>
                   <br></br>
                   <h4 style={{fontWeight: 100}}>
                   After giving birth to my son, I began to realize the lack of adequate physical care available to women during these times of physical transition, such as before and after giving birth and the time leading up to and following menopause. Women’s bodies undergo such powerful physical transformations, and I felt this fact was often unrecognized within the fitness industry.  
                   </h4>
                   <br></br>
                   <h4 style={{fontWeight: 100}}>
                   Because of this, I felt women were not being given the kind of tailored exercise programming they truly deserved. This thought led me to create New Phase Fitness in the hopes of providing the kind of support that everyone deserves during these pivotal phases.
                   </h4>
                </div>
            </div>
        </Layout>
    )
}


