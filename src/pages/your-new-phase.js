import React from 'react'
import Layout from '../components/phaselayout'
import Phase from '../components/Phase'

export default function YourNewPhase() {
    return (
        <Layout>
            <Phase 
            lady="towel"
            background="your-new-phase"
            title="Your New Phase of Fitness"
            fontColor="gold-then-phase-gray" 
            copy={<>A woman’s body undergoes many powerful physical transformations. I believe women deserve more than a “one-size-fits all” approach to their physical health, particularly during the demanding phases of parenthood and during the transition into perimenopause and menopause. 
                As a certified woman’s health and fitness specialist, I am here to support your fitness and health goals.
                <br></br><br></br>
                New Phase Fitness offers customized in-home or virtual personal training sessions and nutrition coaching for women. In-home personal training is available if you live in the Atlanta area. We have flexible programming options to fit your needs. Schedule a free consultation for more detailed information about our personal fitness programs. 
                </>}
            />
        </Layout>
    )
}
