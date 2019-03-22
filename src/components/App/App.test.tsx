import * as React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-testing-library';


import { configureStore } from '../../state';
import { App } from './App';

const { store } = configureStore();

describe('Given a App component', () => {
  describe('when it is rendered', () => {
    it('should match the snapshot', () => {
      const { container } = render(<Provider store={store}><App /></Provider>);

      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
