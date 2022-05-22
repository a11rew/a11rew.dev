import React from 'react'
import './glitch.scss'

interface Props {}

const GlitchyText: React.FC<Props> = ({ children }) => {
  return (
    <div className="glitch" data-text={children}>
      {children}
    </div>
  )
}

export default GlitchyText
