import React from 'react'
import { render } from '@testing-library/react'
import {
  createHistory,
  createMemorySource,
  LocationProvider,
  Router,
} from '@reach/router'

/**TODO: Better mock return typing */
export const renderWithRouter = (
  ui: React.ReactNode,
  { route = '/', history = createHistory(createMemorySource(route)) } = {}
): any => {
  return {
    ...render(<LocationProvider history={history}>{ui}</LocationProvider>),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
  }
}

export const renderWithRouterWrapper = (
  ui: React.ReactNode,
  { route = '/', history = createHistory(createMemorySource(route)) } = {}
): any => {
  return {
    ...render(
      <LocationProvider history={history}>
        <Router>{ui}</Router>
      </LocationProvider>
    ),
    history,
  }
}
