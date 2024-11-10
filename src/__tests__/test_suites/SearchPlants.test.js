import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import App from '../../components/App';
import '@testing-library/jest-dom';

describe('Search Plants', () => {
  test('filters plants by name when searching', async () => {
    global.setFetchResponse(global.basePlants);
    const { getByPlaceholderText, queryAllByTestId } = render(<App />);
    const searchInput = getByPlaceholderText('Type a name to search...');
    fireEvent.change(searchInput, { target: { value: 'Aloe' } });

    await waitFor(() => {
      const filteredPlants = queryAllByTestId('plant-item');
      expect(filteredPlants).toHaveLength(1);
    });
  });
});
