import React from 'react'
import Layout from '../components/phaselayout'
import Phase from '../components/Phase'

export default function ParenthoodPhase() {
    return (
        <Layout>
            <Phase lady="pregnant" 
            background="parenthood-bkg"
            fontColor="phase-gray" 
            title="Parenthood Phase"
            copy={<>The motherhood journey is one of the most high-intensity events a body can go through-
            comparable to athletic events such as running a marathon. As a certified pre/post
            natal performance training specialist, I am here to support your motherhood journey with safe,
            effective, and scientifically proven evidence-based programming designed specifically for you
            and your body’s ever-changing needs during this time.
            <br></br><br></br>
            New Phase Fitness offers customized in-home or virtual personal training sessions and nutrition coaching for women. In-home personal training is available if you live in the Atlanta area. We have flexible programming options to fit your needs. Schedule a free consultation for more detailed information about our personal fitness programs. 
            </>}
            />
        </Layout>
    )
}