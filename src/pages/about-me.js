import React from 'react'
import Layout from '../components/phaselayout'
import annie from '../images/annie.png'

export default function AboutMe() {
    return (
        <Layout>
            <div className="main-content about-me-content">
                <div className="about-col-l">
                    <img src={annie} />
                </div>
                <div className="about-col-r">
                   <h1>About Me</h1>
                   <h4 style={{fontWeight: 100}}>
                   Lorem ipsum dolor sit amet, consectetur adipisifwcing elit, sed do eiusmod tempor incididunt ut labore et dolore roipi magna aliqua. Ut enim ad minim veeniam, quis nostruklad exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in tufpoy voluptate velit esse cillum dolore eu fugiat nulla parieratur. Excepteur sint.
                   </h4>
                   <h4 style={{fontWeight: 100}}>
                   Lorem ipsum dolor sit amet, consectetur adipisifwcing elit, sed do eiusmod tempor incididunt ut labore et dolore roipi magna aliqua.
                   </h4>
                   <h4 style={{fontWeight: 100}}>
                   Lorem ipsum dolor sit amet, consectetur adipisifwcing elit, sed do eiusmod tempor incididunt ut labore et dolore roipi magna aliqua.
                   </h4>
                   <h4 style={{fontWeight: 100}}>
                   Lorem ipsum dolor sit amet, consectetur adipisifwcing elit, sed do eiusmod tempor incididunt ut labore et dolore roipi magna aliqua.
                   </h4>
                </div>
            </div>
        </Layout>
    )
}