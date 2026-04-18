import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio sections', () => {
  render(<App />);
  expect(screen.getAllByText(/Hasibul Islam/i).length).toBeGreaterThan(0);
  expect(screen.getByRole('heading', { name: /^Experience$/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /^Skills$/i })).toBeInTheDocument();
});
