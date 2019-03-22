import { cleanup } from 'react-testing-library';

jest.mock('uuid/v4', () => {
  let count = 0;
  return {
      default: () => {
          const key = `test-key-${count}`;
          count++;
          return key;
      }
  };
});

afterEach(cleanup);
