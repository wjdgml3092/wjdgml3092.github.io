import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { useThemeContext } from 'components/Context/ThemeContext'
import { Color } from 'assets/styles/color'
import { GatsbyLinkProps, ItemProps } from 'types/Post'

export type CategoryListProps = {
  selectedCategory: string
  categoryList: {
    [key: string]: number
  }
}

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
))<ItemProps>`
  width: 20%;
  text-align: center;
  padding: 5px 0;
  font-size: 18px;

  span {
    ${({ active, theme }) =>
      active
        ? `font-size: 20px; background: linear-gradient(180deg,rgba(255,255,255,0) 70%, 
       ${theme === 'dark' ? Color.dark.highlight : Color.light.highlight} 50%);`
        : ''}
  }

  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 15px;

    span {
      ${({ active, theme }) =>
        active
          ? `font-size: 17px; background: linear-gradient(180deg,rgba(255,255,255,0) 70%, 
          ${
            theme === 'dark' ? Color.dark.highlight : Color.light.highlight
          } 50%);`
          : ''}
    }
  }
`

const CategoryList = ({
  selectedCategory,
  categoryList,
}: CategoryListProps) => {
  const { theme } = useThemeContext()

  return (
    <CategoryListWrapper>
      {Object.entries(categoryList).map(([name, count]) => (
        <CategoryItem
          to={`/?category=${name}`}
          active={name === selectedCategory}
          key={name}
          theme={theme}
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
