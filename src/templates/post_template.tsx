import { graphql } from 'gatsby'
import { PostFrontmatterType } from 'types/Post'
import Template from 'components/Common/Template'
import PostHead from 'components/Post/PostHead'
import PostContent from 'components/Post/PostContent'
import PostFooter from 'components/Post/PostFooter'
import { Fragment } from 'react'
import CommentWidget from 'components/Post/CommentWidget'

export type PostPageItemType = {
  node: {
    excerpt: string
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
      excerpt,
      html,
      frontmatter: { title, date, category, tag },
    },
  } = edges[0]
  return (
    <Fragment>
      <div>
        <Template title={title} description={excerpt} url={href}>
          <PostHead title={title} date={date} tag={tag} category={category} />

          <PostContent html={html} />

          <PostFooter />

          <CommentWidget />
        </Template>
      </div>
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
            date(formatString: "YYYY.MM.DD.")
            category
            tag
          }
        }
      }
    }
  }
`
