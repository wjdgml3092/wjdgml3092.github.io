import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { BsFillSunFill, BsMoonFill } from 'react-icons/bs'

const HeaderContainer = styled.header`
  border-bottom: 1px solid var(--gray1);
  background: var(--primary-bg);
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
      color: var(--yellow);
    }
  }
`

const Header = () => {
  const toggleTheme = () => {
    const newTheme =
      localStorage.getItem('theme') === 'light' ? 'dark' : 'light'
    localStorage.setItem('theme', newTheme)
    document.documentElement.dataset.theme = newTheme
    window.dispatchEvent(new StorageEvent('storage', { key: newTheme }))
  }

  return (
    <HeaderContainer>
      <Container>
        <Link to="/">Jung's Blog</Link>

        <div onClick={toggleTheme} className="clickIconAction">
          <BsFillSunFill className="darkIcon" />
          <BsMoonFill className="lightIcon" />
        </div>
      </Container>
    </HeaderContainer>
  )
}

export default Header
