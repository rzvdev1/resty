import { expect, test } from 'vitest';

import { renderToString } from 'react-dom/server';
import Footer from './index';

test('Footer component', () => {
  const actual = renderToString(<Footer />);
  const expected = '<footer>© 2018</footer>';
  expect(actual).toBe(expected);
});
