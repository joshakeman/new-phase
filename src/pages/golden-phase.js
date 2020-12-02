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
            fontColor="dark-gray"
            copy="As your body changes, you will need to adapt your fitness regime to meet the needs of your
            new phase of life.
            An exercise program that is designed to be proprioceptively challenging is proven to be more
            beneficial to women as they age. Resistance training is also helpful for preventing or slowing
            down bone loss, potentially aiding in mitigating the effects of osteoporosis."
            />
        </Layout>
    )
}