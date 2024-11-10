import React from 'react';
import { render } from '@testing-library/react';
import App from '../../components/App';
import '@testing-library/jest-dom';

describe('Display Plants on Startup', () => {
  test('displays all plants when the app starts', async () => {
    global.setFetchResponse(global.basePlants);
    const { findAllByTestId } = render(<App />);
    const plantItems = await findAllByTestId('plant-item');
    expect(plantItems).toHaveLength(global.basePlants.length);
  });
});
