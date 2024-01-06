import styled from '@emotion/styled'
import { Color } from 'assets/styles/color'
import { useThemeContext } from 'components/Context/ThemeContext'
import { Link } from 'gatsby'
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs'
import { ThemeProps } from 'types/Post'

const HeaderContainer = styled.header<ThemeProps>`
  border-bottom: 1px solid ${Color.headerLineGray};

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 31;

  background: ${({ theme }) =>
    theme === 'dark' ? Color.dark.background : Color.white};
`

const Container = styled.div`
  width: 768px;
  padding: 15px 15px 15px 0;
  margin: auto;
  font-size: 1.25rem;
  font-weight: 700;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 480px) {
    padding: 15px;
  }

  div {
    cursor: pointer;

    svg:hover {
      color: ${Color.yellow};
    }
  }
`

const Header = () => {
  const { theme, toggleTheme } = useThemeContext()

  return (
    <HeaderContainer theme={theme}>
      <Container>
        <Link to="/">Jung's Blog</Link>

        <div onClick={toggleTheme}>
          {theme === 'light' ? <BsMoonFill /> : <BsFillSunFill />}
        </div>
      </Container>
    </HeaderContainer>
  )
}

export default Header
