import React, { useState } from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

import { BsSun } from 'react-icons/bs'
import { FiMoon } from 'react-icons/fi'

const ThemeSwitch: React.FC = (): React.ReactElement => {
  // Use user theme preference
  const prefersDark =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches

  const [theme, setTheme] = useState<'dark' | 'light'>(
    prefersDark ? 'dark' : 'light'
  )

  const handleSwitch = (): void => {
    setTheme(theme === 'light' ? 'dark' : 'light')

    /** Randomize seed */
    const html = document.querySelector('html') as HTMLHtmlElement
    html.style.setProperty('--fleck-seed', `${Math.random() * 1000}`)
  }

  return (
    <SwitchWrapper
      role="button"
      aria-label={`Toggle button to switch theme from ${theme} to ${
        theme === 'light' ? 'dark' : 'light'
      }`}
      onClick={handleSwitch}
    >
      <RotaryAxis
        style={{
          transform: `rotate(${theme === 'light' ? '0' : '-180'}deg)`,
        }}
      >
        <Sun />
        <Moon />
        <Helmet htmlAttributes={{ theme }} />
      </RotaryAxis>
    </SwitchWrapper>
  )
}

const SwitchWrapper = styled.div`
  cursor: pointer;
  position: relative;
  width: 30px;
  height: 30px;
  overflow: hidden;
  border-radius: 100%;
`

const RotaryAxis = styled.div`
  position: absolute;
  top: 50%;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  transition-property: all;
  transition-timing-function: ease-in;
  transition-duration: 500ms;
`

const Sun = styled(BsSun)`
  position: absolute;
  top: -8px;
  right: calc(50% - 7px);
`

const Moon = styled(FiMoon)`
  position: absolute;
  top: calc(100% - 7px);
  right: calc(50% - 7px);
  transform: rotate(180deg);
`

export default ThemeSwitch
