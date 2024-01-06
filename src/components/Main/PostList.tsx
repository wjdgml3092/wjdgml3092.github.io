import styled from '@emotion/styled'
import PostItem from 'components/Main/PostItem'
import { GatsbyLinkProps, ItemProps, PostListItemType } from 'types/Post'
import useInfiniteScroll, {
  useInfiniteScrollType,
} from 'hooks/useInfiniteScroll'
import { useEffect, useMemo, useState } from 'react'
import { Link } from 'gatsby'
import { useThemeContext } from 'components/Context/ThemeContext'
import { Color } from 'assets/styles/color'

type PostListProps = {
  location: string
  selectedCategory: string
  posts: PostListItemType[]
}

const PostListWrapper = styled.div`
  display: flex;
  width: 768px;
  margin: 0 auto;
  padding: 30px 0 100px;
  column-gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: 30px 15px;
    column-gap: 0px;
  }
`

const TagListWrapper = styled.div`
  width: 20%;

  p {
    border-bottom: 1px solid ${Color.light.secondBackground};
    padding-bottom: 10px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`

const TagListFlexWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  column-gap: 5px;
  margin-top: 10px;
`

const TagWrapper = styled.div`
  margin-bottom: 12px;
`

const TagItem = styled(({ active, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))<ItemProps>`
  text-align: center;
  padding: 5px;
  font-size: 12px;
  color: ${Color.light.secondColor};
  background: ${({ theme }) =>
    theme === 'dark'
      ? Color.dark.secondBackground
      : Color.light.secondBackground};

  cursor: pointer;
  border-radius: 10px;

  ${({ active, theme }) =>
    active
      ? theme === 'dark'
        ? `background-color: ${Color.black};`
        : `background-color: ${Color.black}; color: ${Color.white};`
      : ''}

  cursor: pointer;

  &:hover {
    ${({ active, theme }) =>
      active
        ? `background-color: ${Color.black}; color: ${Color.white};`
        : theme === 'dark'
        ? `background-color: ${Color.dark.highlight}; color: ${Color.dark.defaultColor};`
        : `background-color: ${Color.light.highlight}; color: ${Color.light.secondColor}`}
  }

  span {
    background: inherit;
  }
`

export type TagListProps = {
  selectedTag: string
  tagList: {
    [key: string]: number
  }
}

const PostList = ({ selectedCategory, posts, location }: PostListProps) => {
  const tagHref = location.split('=')[2]

  const { theme } = useThemeContext()

  const [selectedTag, setSelectedTag] = useState(!tagHref ? 'All' : tagHref)

  useEffect(() => {
    setSelectedTag(!tagHref ? 'All' : tagHref)
  }, [tagHref])

  const { containerRef, postList }: useInfiniteScrollType = useInfiniteScroll(
    selectedTag,
    selectedCategory,
    posts,
  )

  const tagList = useMemo(
    () =>
      posts.reduce(
        (
          list: TagListProps['tagList'],
          {
            node: {
              frontmatter: { tag, category },
            },
          }: PostListItemType,
        ) => {
          if (selectedCategory === 'All') {
            tag.forEach(item => {
              if (list[item] === undefined) list[item] = 1
              else list[item]++
            })

            list['All']++
          } else if (category === selectedCategory) {
            tag.forEach(item => {
              if (list[item] === undefined) list[item] = 1
              else list[item]++
            })

            list['All']++
          }
          return list
        },
        { All: 0 },
      ),
    [selectedCategory, selectedTag],
  )

  return (
    <PostListWrapper>
      <div ref={containerRef}>
        {postList.map(
          ({
            node: {
              excerpt,
              id,
              fields: { slug },
              frontmatter,
            },
          }: PostListItemType) => (
            <PostItem
              excerpt={excerpt}
              {...frontmatter}
              link={slug}
              key={id}
              selectedLink={`/?category=${selectedCategory}&tag=${selectedTag}`}
            />
          ),
        )}
      </div>
      <TagListWrapper>
        <p>Tag</p>
        <TagListFlexWrapper>
          {Object.entries(tagList).map(([name, count]) => (
            <TagWrapper
              onClick={() => {
                setSelectedTag(name)
              }}
              key={name}
            >
              <TagItem
                to={`/?category=${selectedCategory}&tag=${name}`}
                active={name === selectedTag}
                key={name}
                theme={theme}
              >
                <span>
                  {name}({count})
                </span>
              </TagItem>
            </TagWrapper>
          ))}
        </TagListFlexWrapper>
      </TagListWrapper>
    </PostListWrapper>
  )
}

export default PostList
