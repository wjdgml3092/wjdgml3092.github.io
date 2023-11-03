import styled from '@emotion/styled'
import React, { createRef, useEffect } from 'react'

const CommentWrapper = styled.div`
  width: 768px;
  margin: auto;

  @media (max-width: 768px) {
    width: 100%;
    padding: 15px;
  }
`

const src = 'https://giscus.app/client.js'

type GiscusAttributesType = {
  src: string
  'data-repo': string
  'data-repo-id': string
  'data-category': string
  'data-category-id': string
  'data-mapping': string
  'data-strict': string
  'data-reactions-enabled': string
  'data-emit-metadata': string
  'data-input-position': string
  'data-theme': string
  'data-lang': string
  crossorigin: string
  async: string
}

const CommentWidget = () => {
  const element = createRef<HTMLDivElement>()

  useEffect(() => {
    if (element.current === null) return

    const giscus: HTMLScriptElement = document.createElement('script')

    const attributes: GiscusAttributesType = {
      src,
      'data-repo': 'wjdgml3092/wjdgml3092.github.io',
      'data-repo-id': 'R_kgDOJ0fPzg',
      'data-category': 'Giscus',
      'data-category-id': 'DIC_kwDOJ0fPzs4CapzG',
      'data-mapping': 'pathname',
      'data-strict': '0',
      'data-reactions-enabled': '1',
      'data-emit-metadata': '0',
      'data-input-position': 'top',
      'data-theme': 'preferred_color_scheme',
      'data-lang': 'ko',
      crossorigin: 'anonymous',
      async: 'true',
    }

    Object.entries(attributes).forEach(([key, value]) => {
      giscus.setAttribute(key, value)
    })

    element.current.appendChild(giscus)
  }, [])

  return <CommentWrapper ref={element} />
}

export default CommentWidget
