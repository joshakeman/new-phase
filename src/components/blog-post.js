import React from 'react'
import Img from "gatsby-image"
import PortableText from './portableText'


export default function BlogPostComponent(post) {
    console.log(post)
    return (
        <div className="blog-post-wrapper">
            <Img
            className="jumbo-bkg blog-main-img"
            fluid={post.mainImage.asset.fluid} />
            <div className="blog-post-inner-wrapper">
                <h1>{post.title}</h1>
                {post._rawBody && <PortableText blocks={post._rawBody} />}
            </div>
        </div>
    )
}
