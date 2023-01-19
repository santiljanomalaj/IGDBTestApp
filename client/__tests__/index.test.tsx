import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByText('Home - Client Side Auth');

    expect(heading).toBeInTheDocument();
  })

})
