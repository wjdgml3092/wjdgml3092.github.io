import { ReactNode } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

export type CategoryListProps = {
  selectedCategory: string
  categoryList: {
    [key: string]: number
  }
}

type CategoryItemProps = {
  active: boolean
}

type GatsbyLinkProps = {
  children: ReactNode
  className?: string
  to: string
} & CategoryItemProps

const CategoryListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 768px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 50px;
  }

  @media (max-width: 480px) {
    margin-top: 10px;
  }
`

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const CategoryItem = styled(({ active, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))<CategoryItemProps>`
  width: 20%;
  text-align: center;
  padding: 5px 0;
  font-size: 18px;

  span {
    ${({ active }) =>
      active
        ? 'font-size: 20px; background: linear-gradient(180deg,rgba(255,255,255,0) 70%, #fff5b1 50%);'
        : ''}
  }

  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 15px;

    span {
      ${({ active }) =>
        active
          ? 'font-size: 17px; background: linear-gradient(180deg,rgba(255,255,255,0) 70%, #fff5b1 50%);'
          : ''}
    }
  }
`

const CategoryList = ({
  selectedCategory,
  categoryList,
}: CategoryListProps) => {
  return (
    <CategoryListWrapper>
      {Object.entries(categoryList).map(([name, count]) => (
        <CategoryItem
          to={`?category=${name}`}
          active={name === selectedCategory}
          key={name}
        >
          <span>
            {name}
            {/* ({count}) */}
          </span>
        </CategoryItem>
      ))}
    </CategoryListWrapper>
  )
}

export default CategoryList
