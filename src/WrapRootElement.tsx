import { GatsbyBrowser } from 'gatsby'
import Header from 'components/Common/Header'
import GlobalStyle from 'components/Common/GlobalStyle'
import Footer from 'components/Common/Footer'
import { Fragment } from 'react'

const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({ element }) => {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      {element}
      <Footer />
    </Fragment>
  )
}

export default wrapRootElement
