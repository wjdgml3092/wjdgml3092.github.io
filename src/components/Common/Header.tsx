import styled from '@emotion/styled'
import { Link } from 'gatsby'

const HeaderContainer = styled.header`
  border-bottom: 1px solid #d9d9d9;
`

const Container = styled.div`
  width: 768px;
  padding: 15px;
  margin: auto;
  font-size: 1.25rem;
  font-weight: 700;

  @media (max-width: 768px) {
    width: 100%;
  }
`

const Header = () => {
  return (
    <HeaderContainer>
      <Container>
        <Link to="/">Jung's Blog</Link>
      </Container>
    </HeaderContainer>
  )
}

export default Header
