import React, { useState } from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

import { BsSun } from 'react-icons/bs'
import { FiMoon } from 'react-icons/fi'

const ThemeSwitch: React.FC = (): React.ReactElement => {
  const [theme, setTheme] = useState<'dark' | 'light'>('light')

  const handleSwitch = (): void => {
    setTheme(theme === 'light' ? 'dark' : 'light')

    /** Randomize seed */
    const html = document.querySelector('html') as HTMLHtmlElement
    html.style.setProperty('--fleck-seed', `${Math.random() * 1000}`)
  }

  return (
    <SwitchButton role="button" onClick={handleSwitch}>
      {theme === 'light' ? <BsSun /> : <FiMoon />}
      <Helmet htmlAttributes={{ theme }} />
    </SwitchButton>
  )
}

const SwitchButton = styled.div`
  cursor: pointer;
`

export default ThemeSwitch
