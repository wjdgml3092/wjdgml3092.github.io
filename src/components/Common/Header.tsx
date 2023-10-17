import styled from '@emotion/styled'
import { Link } from 'gatsby'

const HeaderContainer = styled.header`
  border-bottom: 1px solid #d9d9d9;
  background-color: #fff;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 31;
`

const Container = styled.div`
  width: 768px;
  padding: 15px 15px 15px 0;
  margin: auto;
  font-size: 1.25rem;
  font-weight: 700;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    padding: 15px;
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
