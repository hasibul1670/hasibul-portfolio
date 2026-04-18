import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio sections', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /Hasibul/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Backend roles, clearly shown\./i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /Backend tools I use most\./i })).toBeInTheDocument();
});
