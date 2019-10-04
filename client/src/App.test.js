import React from 'react';
import { render } from '@testing-library/react';

import App from './App';

test('App renders without crashing', () => {
  render(<App />);

});
test('contain Players', () => {
  const container = render(<App />);
  container.getAllByText(/Players/i);
});