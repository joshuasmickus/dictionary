import { createMemoryHistory } from 'history'
import * as React from 'react';
import { Router } from 'react-router-dom';
import { render } from 'react-testing-library';

import { CreateDictionaryItem } from './CreateDictionaryItem';

const id = 'someid';
const requiredProps = {
  createDictionaryItemRequest: jest.fn(),
  items: [],
  list: [{ name: 'something', id }],
  match: { params: { id }}
};

describe('Given a CreateDictionaryItem component', () => {
  describe('when it is rendered', () => {
    it('should match the snapshot', () => {
      const { container } = render(<Router history={createMemoryHistory()}><CreateDictionaryItem {...requiredProps} /></Router>);

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
