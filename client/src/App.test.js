import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import PlayersCard from './components/PlayersCard';
import Input from './components/Input';

// test('renders without crashing', () => {

//   render(<App />);

// });



test('find player', () => {
  // Arrange
  const { findByText } = render(<PlayersCard />);
  // Act - getting the node by text

  findByText(/player/i);
  // Assertion is if ^^^ is truthy
});
test(' find name', () => {
  const { findByText } = render(<Input />);
  findByText(/name/i);
})

test('renders without crashing', () => {
  const { findByTestId } = render(<Input />);
  findByTestId('react');
})