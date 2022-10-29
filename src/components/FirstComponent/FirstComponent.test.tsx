import { render, screen } from '@testing-library/react'
import { FirstComponent } from './FirstComponent'

describe('FirstComponent', () => {
  test('should be rendered', () => {
    render(<FirstComponent />)
    expect(screen.getByText(/First Component/i)).toBeInTheDocument()
  })
})
