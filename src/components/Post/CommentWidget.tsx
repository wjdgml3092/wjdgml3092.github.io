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

const CommentWidget = () => {
  const element = createRef<HTMLDivElement>()

  useEffect(() => {
    if (element.current === null) return

    const giscus: HTMLScriptElement = document.createElement('script')

    const attributes = {
      src: 'https://giscus.app/client.js',
      'data-repo': 'wjdgml3092/blog-comment-giscus',
      'data-repo-id': 'R_kgDOKoqQmA',
      'data-category': 'Announcements',
      'data-category-id': 'DIC_kwDOKoqQmM4Capt_',
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
