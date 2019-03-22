import produce from 'immer';
import uuid from 'uuid/v4';

import { IAction, IDictionaries } from '../../models/common';

import { createDictionary, createDictionaryItem, deleteDictionary, deleteDictionaryItem } from './dictionaryRoutines';

export const initialState: IDictionaries = {
  items: [],
  list: [
    // { from: 'some value', to: 'some other value', id: 1 }
  ]
};

export const dictionaryReducer = (state = initialState, action: IAction) =>
  produce(state, draft => {
    switch (action.type) {
      case createDictionary.REQUEST:
        draft.list.push({ ...action.payload, id: uuid() });
        break;
      case createDictionaryItem.REQUEST:
        draft.items.push({ ...action.payload, id: uuid() });
        break;
        case deleteDictionary.REQUEST:
          draft.list = draft.list.filter((item) => item.id !== action.payload);
          break;
        case deleteDictionaryItem.REQUEST:
          draft.items = draft.items.filter((item) => item.id !== action.payload.id && item.dictionaryId !== action.payload.dictionaryId);
          break;
    }

    return draft;
  });
