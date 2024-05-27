import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  render(<App />);
  const headlineElement = screen.getByText(/Welcome to My Website/i);
  expect(headlineElement).toBeInTheDocument();
});

