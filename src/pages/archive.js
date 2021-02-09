import React from 'react'

const ArchivePage = props => {
    return (
        <p>Archive</p>
    )
}

export default ArchivePage

// import React from 'react'
// import {graphql} from 'gatsby'
// import {mapEdgesToNodes} from '../lib/helpers'
// import BlogPostPreviewGrid from '../components/blog-post-preview-grid'
// import Container from '../components/container'
// import SEO from '../components/seo'
// import Layout from "../components/phaselayout"

// export const query = graphql`
//   query ArchivePageQuery {
//     posts: allSanityPost(
//       sort: { fields: [publishedAt], order: DESC }
//       filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
//       ) {
//       edges {
//         node {
//           id
//           publishedAt
//           mainImage {
//             ...SanityImage
//             alt
//           }
//           title
//           _rawExcerpt
//           slug {
//             current
//           }
//         }
//       }
//     }
//   }
// `

// const ArchivePage = props => {
//     const {data, errors} = props
  
//     const postNodes = data && data.posts && mapEdgesToNodes(data.posts)
  
//     return (
//       <Layout>
//         <SEO title='Archive' />
//         <Container>
//           <h1>Archive</h1>
//           {postNodes && postNodes.length > 0 && <BlogPostPreviewGrid nodes={postNodes} />}
//         </Container>
//       </Layout>
//     )
//   }
  
//   export default ArchivePage