import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import PlayersCard from './components/PlayersCard';

test('renders without crashing', () => {

  render(<App />);

});



test('find player', () => {
  // Arrange
  const { findByText } = render(<PlayersCard />);
  // Act - getting the node by text

  findByText(/player/i);
  // Assertion is if ^^^ is truthy
});
