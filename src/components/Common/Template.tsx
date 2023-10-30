import { ReactNode } from 'react'
import GlobalStyle from 'components/Common/GlobalStyle'
import { Helmet } from 'react-helmet'

type TemplateProps = {
  title: string
  description: string
  url: string
  children: ReactNode
}

const Template = ({ title, description, url, children }: TemplateProps) => {
  return (
    <main>
      <Helmet>
        <title>{title}</title>

        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={title} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:site" content="@wjdgml3092" />
        <meta name="twitter:creator" content="@wjdgml3092" />

        <meta
          name="google-site-verification"
          content="NXRnBj7QbFAt0AhNZegJ75v9j1mNGsBQ8fQvff9aDBA"
        />

        <meta
          name="naver-site-verification"
          content="2e1bd635204729c9695cf690455946481044a616"
        />

        <html lang="ko" />
      </Helmet>

      <GlobalStyle />
      {children}
    </main>
  )
}

export default Template
