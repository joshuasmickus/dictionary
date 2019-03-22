import { IDictionaryItem } from '../../models/common';

interface IDictionaryErrors {
  from?: string;
  to?: string;
};

export const validate = (items: IDictionaryItem[], values: any) => {
  const errors: IDictionaryErrors = {};

  if (values.from === values.to) {
    errors.from = 'From and to cannot be the same';
    errors.to = 'To and from cannot be the same';
  }

  if (values.from === '') {
    errors.from = 'Enter a from value';
  }

  if (values.to === '') {
    errors.to = 'Enter a to value';
  }

  items.forEach((item: IDictionaryItem) => {
    if(item.from === values.from) {
      errors.from = 'Duplicate from key';
    }

    items.forEach((itemToCheck: IDictionaryItem) => {
      if (values.from === item.from && values.to === itemToCheck.to) {
        errors.from = 'From is a clone of another dictionary item';
        errors.to = 'To is a clone of another dictionary item';
      }
    });
  });

  return errors;
};
