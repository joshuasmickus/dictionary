import produce from 'immer';
import uuid from 'uuid/v4';

import { createDictionary } from './dictionaryRoutines';

interface IAction {
  type: any;
  payload?: any;
};
export interface IDictionary {
  from: string;
  to: string;
  id: number;
};

export interface IDictionaries {
  list: IDictionary[];
}

export const initialState: IDictionaries = {
  list: [{ from: 'some value', to: 'some other value', id: 1 }]
};

export const dictionaryReducer = (state = initialState, action: IAction) =>
  produce(state, draft => {
    switch (action.type) {
      case createDictionary.REQUEST:
        draft.list.push({ ...action.payload, id: uuid() });
    }
  });
