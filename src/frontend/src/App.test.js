import { render, screen } from '@testing-library/react';
import VideoPlayer from './Components/CallPage/VideoPlayer';

test('login input show be rendered', () =>{
  render(<VideoPlayer />);
  const logininput = screen.getByRole("button");
  expect(logininput).toBeInTheDocument();
})