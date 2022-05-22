import React from 'react'
import Layout from './src/layouts/'

// typography
import './src/typography.css'

// normalize CSS across browsers
import './src/normalize.css'
// custom CSS styles
import './src/index.css'
// Highlighting for code blocks
import 'prismjs/themes/prism.css'

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  const transitionDelay = 200

  if (location.action === 'PUSH') {
    window.setTimeout(() => window.scrollTo(0, 0), transitionDelay)
  } else {
    const savedPosition = getSavedScrollPosition(location)
    window.setTimeout(
      () => window.scrollTo(...(savedPosition || [0, 0])),
      transitionDelay
    )
  }
  return false
}
