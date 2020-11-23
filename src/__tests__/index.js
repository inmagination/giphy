import { fireEvent, render, screen } from '@testing-library/react';
import App from 'App';

test('search form can be used', async () => {
  render(<App />)
  
  // coger elementos por rol
  const input = screen.getByRole('textbox')  
  const button = screen.getByRole('button') 

  // simular eventos
  fireEvent.change(input, { target: { value: 'Husky' }})
  fireEvent.click(button)

  // buscar elemento que se carga asincronamente
  const title = await screen.findByText("Results for 'Husky'")
  expect(title).toBeVisible()
})