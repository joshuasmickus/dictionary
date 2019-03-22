import { dictionaryReducer, initialState } from './dictionaryReducer';
import { createDictionary, createDictionaryItem, deleteDictionary, deleteDictionaryItem } from './dictionaryRoutines';

describe('Given a dictionaryReducer', () => {
  describe('when it is called', () => {
    it('should return the initial state', () => {
      expect(
        dictionaryReducer(undefined, { type: 'something'})
      ).toEqual(initialState)
    });

    describe('and an action is dispatched', () => {
      describe('and the action is createDictionary.REQUEST', () => {
        it('should return the expected state', () => {
          expect(dictionaryReducer(undefined, createDictionary.request({ name: 'something' }))).toEqual({
            items: [],
            list: [{ name: 'something', id: 'test-key-0' }]
          });
        });
      });

      describe('and the action is createDictionaryItem.REQUEST', () => {
        it('should return the expected state', () => {
          expect(dictionaryReducer(undefined, createDictionaryItem.request({ from: 'something', to: 'something-else', dictionaryID: '1234' }))).toEqual({
            items: [{ from: 'something', to: 'something-else', dictionaryID: '1234', id: 'test-key-1' }],
            list: []
          });
        });
      });

      describe('and the action is a deleteDictionary.REQUEST', () => {
        it('should delete the matching dictionary', () => {
          const id = 'fb8f0ec4-47fc-4fa5-8e82-026d76fe971a';
          const LIST_WITH_DELETED_ITEM = [
            {
              id: '0de594e2-42a5-4194-8990-88d22a29c2d3',
              name: 'safe'
            },
            {
              id,
              name: 'not safe'
            }
          ];
          const LIST_WITHOUT_DELETED_ITEM = [
            {
              id: '0de594e2-42a5-4194-8990-88d22a29c2d3',
              name: 'safe'
            }
          ];

          expect(dictionaryReducer({
            items: [],
            list: LIST_WITH_DELETED_ITEM
          }, deleteDictionary.request(id))).toEqual({
            items: [],
            list: LIST_WITHOUT_DELETED_ITEM
          });
        });
      });

      describe('and the action is deleteDictionaryItem.REQUEST', () => {
        it('should delete only the matching item', () => {
          const listId = 'd429cac4-d0fa-42d4-b059-da69b7982913';
          const deleteItem = {
            dictionaryId: listId,
            from: 'banana',
            id: 'fb8f0ec4-47fc-4fa5-8e82-026d76fe971a',
            to: 'jumper'
          };
          const doNotDeleteItem = {
            dictionaryId: listId,
            from: 'hello',
            id: '0de594e2-42a5-4194-8990-88d22a29c2d3',
            to: 'goodbye'
          };
          const ITEMS_WITH_DELETED = [doNotDeleteItem, deleteItem];
          const ITEMS_WITHOUT_DELETED = [doNotDeleteItem];
          const list = [
            {
              id: listId,
              name: 'safe'
            }
          ];

          expect(dictionaryReducer({
            items: ITEMS_WITH_DELETED,
            list
          }, deleteDictionaryItem.request({
            dictionaryId: listId,
            id: deleteItem.id
          }))).toEqual({
            items: ITEMS_WITHOUT_DELETED,
            list
          });
        });
      });
    });
  });
});
