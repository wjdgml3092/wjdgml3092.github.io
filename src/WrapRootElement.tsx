import { GatsbyBrowser } from 'gatsby'
import { ThemeContextProvider } from 'components/Context/ThemeContext'
import Header from 'components/Common/Header'
import GlobalStyle from 'components/Common/GlobalStyle'
import Footer from 'components/Common/Footer'

const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({ element }) => {
  return (
    <ThemeContextProvider>
      <GlobalStyle />
      <Header />
      {element}
      <Footer />
    </ThemeContextProvider>
  )
}

export default wrapRootElement
