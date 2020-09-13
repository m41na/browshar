import React from 'react';
import { render } from '@testing-library/react';
import App from '../../client/App';

describe("Testing App interface", () => {

  test('renders learn react link', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Dev Mode/i);
    expect(linkElement).toBeInTheDocument();
  });
})
