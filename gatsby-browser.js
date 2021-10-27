import React from 'react'
import GlobalStyles from './src/styles.globals'

// custom typefaces
import '@fontsource/inter'
// normalize CSS across browsers
import './src/normalize.css'
// custom CSS styles

// Highlighting for code blocks
import 'prismjs/themes/prism.css'

export const wrapRootElement = ({ element }) => (
  <>
    <GlobalStyles />
    {element}
  </>
)
