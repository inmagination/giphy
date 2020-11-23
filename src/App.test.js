import { render, screen } from '@testing-library/react';
import App from 'App';

test('renders without crashing', () => {
  render(<App />);
  const titleElement = screen.getByText(/Los gifs más populares/i);
  expect(titleElement).toBeInTheDocument();
});