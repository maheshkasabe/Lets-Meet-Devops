import { render, screen } from '@testing-library/react';
import App from './App';

test('login input show be rendered', () =>{
  render(<App />);
  const logininput = screen.getByRole("button");
  expect(logininput).toBeInTheDocument();
})