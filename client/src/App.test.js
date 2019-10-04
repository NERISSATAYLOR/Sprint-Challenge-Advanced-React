import React from 'react';
import PlayersList from './components/PlayersList';
import { render } from '@testing-library/react';

import App from './App';

test('App renders without crashing', () => {
  render(<App />);

});
test(' name', () => {
  const container = render(<PlayersList />);
  container.getAllByText(/name/i);
});

test('mate is found', () => {
  const container = render(<App />);
  container.getAllByText(/mate/i);
});