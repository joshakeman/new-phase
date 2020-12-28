import React from 'react'
import Layout from '../components/phaselayout'
import Phase from '../components/Phase'

export default function GoldenPhase() {
    return (
        <Layout>
            <Phase 
            lady="dumbbell" 
            background="golden-phase-bkg"
            title="Golden Phase"
            fontColor="phase-gray" 
            copy={<>As your body changes, you will need to adapt your fitness regime to meet the needs of your
            new phase of life.
            An exercise program that is designed to be proprioceptively challenging is proven to be more
            beneficial to women as they age. Resistance training is also helpful for preventing or slowing
            down bone loss, potentially aiding in mitigating the effects of osteoporosis.
            <br></br><br></br>
            New Phase Fitness offers customized in-home or virtual personal training sessions and nutrition coaching for women. In-home personal training is available if you live in the Atlanta area. We have flexible programming options to fit your needs. Schedule a free consultation for more detailed information about our personal fitness programs. 
            </>}
            />
        </Layout>
    )
}