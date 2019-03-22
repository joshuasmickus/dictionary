import { validate } from './CreateDictionaryItem.validate';

describe('Given a validate function', () => {
  describe('when it is called', () => {
    describe('and from is empty', () => {
      it('should set an error on from', () => {
        expect(validate([], {
          from: '',
          to: 'something'
        })).toEqual({
          from: 'Enter a from value'
        });
      });
    });

    describe('and to is empty', () => {
      it('should set an error on to', () => {
        expect(validate([], {
          from: 'something',
          to: ''
        })).toEqual({
          to: 'Enter a to value'
        });
      });
    });

    describe('and from and to are the same value', () => {
      it('should set an error on from and to', () => {
        expect(validate([], {
          from: 'something',
          to: 'something'
        })).toEqual({
          from: 'From and to cannot be the same',
          to: 'To and from cannot be the same'
        });
      });
    });

    describe('and from exists in items', () => {
      it('should set an error on from', () => {
        expect(validate([{
          dictionaryId: 'dictID',
          from: 'something',
          id: 'some id',
          to: 'something else'
        }], {
          from: 'something',
          to: 'banana'
        })).toEqual({
          from: 'Duplicate from key'
        });
      });
    });

    describe('and from and to exist on an item', () => {
      it('should set an error on from and to', () => {
        expect(validate([{
          dictionaryId: 'dictID',
          from: 'something',
          id: 'some id',
          to: 'something else'
        }], {
          from: 'something',
          to: 'something else'
        })).toEqual({
          from: 'From is a clone of another dictionary item',
          to: 'To is a clone of another dictionary item'
        });
      });
    });
  });
});
