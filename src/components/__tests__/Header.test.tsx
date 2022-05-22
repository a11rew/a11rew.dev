import React from 'react'
import { renderWithRouter } from '../../../__mocks__/Router.mock'

import Header from '../Header'

describe('Page header', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    })
  })

  it('renders correctly', () => {
    const { container } = renderWithRouter(<Header />)

    expect(container.innerHTML).toMatch('Andrew.')
  })
})

// describe('Navigation from page header', () => {
//   test('navigating to different pages', async () => {

//     const {
//       container,
//       history: { navigate },
//     } = renderWithRouter(<Header />)

//     await navigate('/about')
//     expect(container.innerHTML).toMatch('Coming soon')
//   })
// })
