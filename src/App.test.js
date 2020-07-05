import React from 'react';
import { render } from '@testing-library/react';
import DemoApp from './App';

test('renders DemoApp heading', () => {
  const { getByText } = render(<DemoApp />);
  const heading = getByText(/DemoApp/i);
  expect(heading).toBeInTheDocument();
});
