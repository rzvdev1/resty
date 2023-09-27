import { expect, test } from 'vitest';

import { renderToString } from 'react-dom/server';
import Header from './index';

test('Header component', () => {
  const actual = renderToString(<Header />);
  const expected = '<header><h1>RESTy</h1></header>';
  expect(actual).toBe(expected);
});
