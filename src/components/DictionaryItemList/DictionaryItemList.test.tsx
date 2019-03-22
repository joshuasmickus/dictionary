import { createMemoryHistory } from 'history'
import * as React from 'react';
import { Router } from 'react-router-dom';
import { render } from 'react-testing-library';

import { DictionaryItemList } from './DictionaryItemList';

const id = 'someid';
const requiredProps = {
  deleteDictionaryItemRequest: jest.fn(),
  items: [],
  list: [{ name: 'something', id }],
  match: { params: { id }}
};

describe('Given a DictionaryItemList component', () => {
  describe('when it is rendered', () => {
    it('should match the snapshot', () => {
      const { container } = render(<Router history={createMemoryHistory()}><DictionaryItemList {...requiredProps} /></Router>);

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
