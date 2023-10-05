import { expect, test } from 'vitest';

import { renderToString } from 'react-dom/server';

import Form from './index';

test('Results component', () => {
  expect('should render the correct content', () => {
    const data = {
      count: 2,
      results: [
        {
          name: 'fake thing 1',
          url: 'http://fakethings.com/1',
        },
        {
          name: 'fake thing 2',
          url: 'http://fakethings.com/2',
        },
      ],
    };

    const headers = {
      'content-type': 'application/json',
    };

    const html = renderToString(<Form data={data} headers={headers} />);

    expect(html).toContain('Response Headers:');
    expect(html).toContain('Response Data:');
    expect(html).toContain('fake thing 1');
    expect(html).toContain('fake thing 2');
    expect(html).toContain('http://fakethings.com/1');
    expect(html).toContain('http://fakethings.com/2');
    expect(html).toContain('application/json');
    expect(html).toContain('2');
  });
});
