import { createMemoryHistory } from 'history'
import * as React from 'react';
import { Router } from 'react-router-dom';
import { render } from 'react-testing-library';

import { DictionaryList } from './DictionaryList';

const id = 'someid';
const requiredProps = {
  deleteDictionaryRequest: jest.fn(),
  list: [{ name: 'something', id }],
};

describe('Given a DictionaryList component', () => {
  describe('when it is rendered', () => {
    it('should match the snapshot', () => {
      const { container } = render(<Router history={createMemoryHistory()}><DictionaryList {...requiredProps} /></Router>);

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
