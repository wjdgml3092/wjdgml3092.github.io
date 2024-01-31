/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */

import { createElement } from 'react'

import WrapRootElement from './src/WrapRootElement'

export const wrapRootElement = WrapRootElement

const ScriptElement = [
  createElement('script', {
    dangerouslySetInnerHTML: {
      __html: `
      (() => {
        try {
          preferredTheme = localStorage.getItem('theme');
        } catch (err) {}

        // 사용자가 dark모드인지
        let darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
        var settingTheme = preferredTheme || (darkQuery.matches ? 'dark' : 'light');

        document.documentElement.dataset.theme = settingTheme;

        localStorage.setItem('theme', settingTheme);
      })();`,
    },
  }),
]

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents(ScriptElement)
}
