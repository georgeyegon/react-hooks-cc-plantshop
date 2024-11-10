import React from 'react';
import { render, fireEvent, within } from '@testing-library/react';
import App from '../../components/App';
import '@testing-library/jest-dom';

describe('Mark Plant as Sold Out', () => {
  test('marks plant as sold out when button clicked', async () => {
    global.setFetchResponse(global.basePlants);
    const { findAllByTestId } = render(<App />);

    const plantItems = await findAllByTestId('plant-item');
    const inStockButton = within(plantItems[0]).getByText('In Stock');
    fireEvent.click(inStockButton);
    
    const outOfStockButton = within(plantItems[0]).getByText('Out of Stock');
    expect(outOfStockButton).toBeInTheDocument();
  });
});
