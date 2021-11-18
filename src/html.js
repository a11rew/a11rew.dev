// @ts-nocheck

import React from 'react'
import PropTypes from 'prop-types'

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <script
          dangerouslySetInnerHTML={{
            /** Polyfill paint API */
            __html: `
                if (CSS["paintWorklet"] === undefined) {
                  import("https://unpkg.com/css-paint-polyfill").then(() => {
                    CSS.paintWorklet.addModule("https://unpkg.com/@georgedoescode/houdini-fleck")
                  })
                } else {
                  CSS.paintWorklet.addModule("https://unpkg.com/@georgedoescode/houdini-fleck")
                }

              `,
          }}
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}