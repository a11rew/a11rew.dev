import React from 'react'
import GlobalStyles from './src/styles.globals'

// typography
import './src/typography.css'

// normalize CSS across browsers
import './src/normalize.css'
// custom CSS styles
import './src/index.css'
// Highlighting for code blocks
import 'prismjs/themes/prism.css'

export const wrapRootElement = ({ element }) => (
  <>
    <GlobalStyles />
    {element}
  </>
)
