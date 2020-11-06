import React from 'react'
import PhaseCards from '../components/PhaseCards'
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

export default function phases() {
    return (
        <Layout>
            <SEO title="Phases" />
            <PhaseCards />
            
        </Layout>
    )
}
