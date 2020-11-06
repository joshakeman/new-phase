import React from 'react'
import PhaseCards from '../components/PhaseCards'
import Layout from '../components/phaselayout'
import Img from "gatsby-image"
import SEO from "../components/seo"

export default function phases() {
    return (
        <Layout>
            <SEO title="Phases" />
            <div class="main-content">
                <div class="top-buffer">
                    <PhaseCards />
                </div>
            </div>
        </Layout>
    )
}
