import { createMemoryHistory } from 'history'
import * as React from 'react';
import { Router } from 'react-router-dom';
import { render } from 'react-testing-library';

import { CreateDictionary } from './CreateDictionary';

const requiredProps = {
  createDictionaryRequest: jest.fn(),
};

describe('Given a CreateDictionary component', () => {
  describe('when it is rendered', () => {
    it('should match the snapshot', () => {
      const { container } = render(<Router history={createMemoryHistory()}><CreateDictionary {...requiredProps} /></Router>);

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
