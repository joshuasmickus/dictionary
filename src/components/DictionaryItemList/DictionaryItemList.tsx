import * as React from 'react';
import { Link, Redirect } from 'react-router-dom';

import { IDictionaryItem, IDictionaryName, IDictionaryState } from '../../models/common';
import { deleteDictionaryItem } from '../../state/dictionary/dictionaryRoutines';

interface IDictionaryItemListProps {
  items: IDictionaryItem[];
  list: IDictionaryName[];
  deleteDictionaryItemRequest: (dictionaryId: string, id: string) => void;
  match: any;
};

export const DictionaryItemList: React.FC<IDictionaryItemListProps> = ({
  items,
  list,
  deleteDictionaryItemRequest,
  match
}) => {
  const { id: dictionaryId } = match.params;
  const deleteItem = (id: IDictionaryItem['id']) => (event: React.MouseEvent) => {
    event.preventDefault();

    deleteDictionaryItemRequest(dictionaryId, id);
  };
  const listItems = items.filter((item) => item.dictionaryId === dictionaryId);
  const filteredDictionaries = list.filter((dictionary) => dictionary.id === dictionaryId);
  const shouldShowItems = listItems.length > 0;

  if (filteredDictionaries.length === 0) {
    return <Redirect to="/" />;
  }

  const { name: dictionaryName } = filteredDictionaries[0];

  return (
    <React.Fragment>
      <h2>Entries for {dictionaryName}</h2>
      {
        shouldShowItems &&
        <Link to={`/edit-dictionary/${dictionaryId}/add-item`}>Add item</Link>
      }
      <ul>
        {
          shouldShowItems && listItems.map((item: IDictionaryItem) =>
            (
              <li key={item.id}>
                {item.from} {item.to}&nbsp;
                <Link to={`/edit-dictionary/${dictionaryId}/edit-item/${item.id}`}>edit</Link> -&nbsp;
                <a onClick={deleteItem(item.id)} href={`/edit-dictionary/${dictionaryId}/delete-item/${item.id}`}>delete</a>
              </li>
            )
          )
        }
        { !shouldShowItems && <li>There are no dictionary items, <Link to={`/edit-dictionary/${dictionaryId}/add-item`}>add one</Link></li> }
      </ul>
    </React.Fragment>
  );
};

export const mapStateToProps = ({ dictionary }: IDictionaryState) => ({
  items: dictionary.items,
  list: dictionary.list
});

export const mapDispatchToProps = (dispatch: (action: any) => void) => ({
  deleteDictionaryItemRequest: (dictionaryId: IDictionaryName['id'], id: IDictionaryItem['id']) => dispatch(deleteDictionaryItem.request({ dictionaryId, id }))
});
