import { graphql } from 'gatsby'
import { PostFrontmatterType } from 'types/Post'
import Template from 'components/Common/Template'
import PostHead from 'components/Post/PostHead'
import PostContent from 'components/Post/PostContent'
import Header from 'components/Common/Header'
import PostFooter from 'components/Post/PostFooter'
import { Fragment } from 'react'
import Footer from 'components/Common/Footer'

export type PostPageItemType = {
  node: {
    html: string
    frontmatter: PostFrontmatterType
  }
}
type PostTemplateProps = {
  data: {
    allMarkdownRemark: {
      edges: PostPageItemType[]
    }
  }
  location: {
    href: string
  }
}

const PostTemplate = ({
  data: {
    allMarkdownRemark: { edges },
  },
  location: { href },
}: PostTemplateProps) => {
  const {
    node: {
      html,
      frontmatter: { title, summary, date, categories },
    },
  } = edges[0]

  return (
    <Fragment>
      <Header />
      <Template title={title} description={summary} url={href}>
        <PostHead title={title} date={date} categories={categories} />
        <PostContent html={html} />

        <PostFooter />
      </Template>
      <Footer />
    </Fragment>
  )
}

export default PostTemplate

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            categories
          }
        }
      }
    }
  }
`