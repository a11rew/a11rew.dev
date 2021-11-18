import React from 'react'
import { render } from '@testing-library/react'

import ConstructionBanner from '../ConstructionBanner'

describe('Under construction banner', () => {
  it('displays notice', () => {
    const notice = 'Under construction'

    const { getByText } = render(<ConstructionBanner />)

    const renderedNotice = getByText(notice)

    expect(renderedNotice).toBeInTheDocument()
  })
})
