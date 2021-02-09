import {Link} from 'gatsby'
import React from 'react'
import BlogPostPreview from './blog-post-preview'

function BlogPostPreviewGrid (props) {
  return (
    <div className="blog-preview-list-wrapper">
        <div >
        {props.title && <h2 className="blog-preview-list-title">{props.title}</h2>}
        <ul className="flex-column blog-prev-ul">
            {props.nodes &&
            props.nodes.map(node => (
                <li key={node.id} className="justify-center individual-blog-prev">
                <BlogPostPreview {...node} isInList />
                </li>
            ))}
        </ul>
        {props.browseMoreHref && (
            <div className="browse-more-wrapper">
                {/* <Link to={props.browseMoreHref} className="amienne"> */}
                <div class="np-btn margin-auto">
                    <Link to={props.browseMoreHref} className="amienne">Browse More</Link> 
                </div>
                {/* </Link> */}
            </div>
        )}
        </div>
    </div>
  )
}

BlogPostPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default BlogPostPreviewGrid