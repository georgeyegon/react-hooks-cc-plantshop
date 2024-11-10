import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../../components/App';
import '@testing-library/jest-dom';

describe('Add New Plant', () => {
  test('adds a new plant on form submission', async () => {
    global.setFetchResponse(global.basePlants);
    const { getByPlaceholderText, getByText, findByText } = render(<App />);

    fireEvent.change(getByPlaceholderText('Plant name'), { target: { value: 'New Plant' } });
    fireEvent.change(getByPlaceholderText('Image URL'), { target: { value: '/images/new-plant.jpg' } });
    fireEvent.change(getByPlaceholderText('Price'), { target: { value: '9.99' } });
    fireEvent.click(getByText('Add Plant'));

    const newPlant = await findByText('New Plant');
    expect(newPlant).toBeInTheDocument();
  });
});
