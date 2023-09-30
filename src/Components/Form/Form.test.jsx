import { expect, test } from 'vitest';
import { render, fireEvent } from '@testing-library/react';
import Form from './index';

test('Form component renders correctly', () => {
  const handleApiCall = () => {
    urlInput.value = 'https://example.com';
    methodSelect.value = 'POST';
  };

  const props = {
    handleApiCall,
  };

  const { container, getByLabelText } = render(<Form {...props} />);

  const formElement = container.querySelector('form');

  const urlInput = getByLabelText('URL:');
  const methodSelect = getByLabelText('Method:');

  expect(formElement).toBeDefined();
  expect(urlInput).toBeDefined();
  expect(methodSelect).toBeDefined();

  urlInput.value = 'https://example.com';
  methodSelect.value = 'GET';

  fireEvent.submit(formElement);
});
