import React from 'react';
import PlayersList from './PlayersList';
import { render } from '@testing-library/react';


test('props exist', () => {

    const container = render(<.players />);
    container.getByText = getByText(/mates/i);
});
