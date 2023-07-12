import styled from '@emotion/styled'
import { Link } from 'gatsby'

const HeaderContainer = styled.header`
  padding: 15px;
  font-size: 1.25rem;
  font-weight: 700;
  height: 50px;

  border-bottom: 1px solid #d9d9d9;
`

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">Jung's Blog</Link>
    </HeaderContainer>
  )
}

export default Header
