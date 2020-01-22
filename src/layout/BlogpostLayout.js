import React from "react"
import Header from "../components/Header"
import { graphql } from "gatsby"

const BlogpostLayout = ({ data }) => {
  const post = data.wordpressPost
  return (
    <div>
      <Header />
      <main>
        <div className="container">
          <div className="row justify-content-md-center">
            <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </div>
      </main>
    </div>
  )
}

export default BlogpostLayout

export const query = graphql`
  query($slug: String!) {
    wordpressPost(slug: { eq: $slug }) {
      content
      title
      featured_media {
        source_url
      }
      categories {
        name
      }
      excerpt
    }
  }
`
