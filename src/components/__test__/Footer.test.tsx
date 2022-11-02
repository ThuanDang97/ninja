import { render } from '@testing-library/react'

// Components
import Footer from '@components/Footer'

describe('Footer', () => {
  it('renders Footer toMatchSnapshot', () => {
    const { container } = render(<Footer />)
    expect(container).toMatchSnapshot()
  })
})
