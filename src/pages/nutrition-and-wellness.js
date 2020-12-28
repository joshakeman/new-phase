import React from 'react'
import Layout from '../components/phaselayout'
import Phase from '../components/Phase'

export default function NutritionAndWellness() {
    return (
        <Layout>
            <Phase 
            lady="hungry" 
            background="nutrition-bkg"
            title="Nutrition & Wellness for any phase"
            fontColor="phase-gray"
            copy={<>As a certified nutrition coach, I am able to offer my clients a well-rounded fitness plus nutrition package. I recognize your nutritional needs change depending on which phase of life you’re in. I am here to support you as you obtain your health, fitness, or weight loss goals through nutritional coaching.
            <br></br><br></br>
            New Phase Fitness offers customized in-home or virtual personal training sessions and nutrition coaching for women. In-home personal training is available if you live in the Atlanta area. We have flexible programming options to fit your needs. Schedule a free consultation for more detailed information about our personal fitness programs. 
            </>}
            />
        </Layout>
    )
}