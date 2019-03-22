import { Form, Formik } from 'formik';
import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

import { IDictionaryItem, IDictionaryState } from 'src/models/common';
import { editDictionaryItem } from 'src/state/dictionary/dictionaryRoutines';

import './EditDictionaryItem.css';

interface IDictionaryErrors {
  from?: string;
  to?: string;
};
export interface IEditDictionaryItemProps {
  editDictionaryItemRequest: (values: IDictionaryItem) => void;
};
interface IEditDictionaryItemState {
  redirectToHome: boolean;
};
const validate = (values: any) => {
  const errors: IDictionaryErrors = {};

  if (values.from === '') {
    errors.from = 'Enter a from value';
  }

  if (values.to === '') {
    errors.to = 'Enter a to value';
  }

  console.log({ errors }); // tslint:disable-line
  return errors;
};

export class EditDictionaryItem extends React.Component<IEditDictionaryItemProps, IEditDictionaryItemState> {
  public state = {
    redirectToHome: false
  };

  public render() {
    if (this.state.redirectToHome) {
      return <Redirect to="/" />;
    }
    return (
      <Formik
        onSubmit={this.handleSubmit}
        initialValues={{
          from: '',
          to: ''
        }}
        validate={validate}
      >
        {({
          // handleSubmit,
          handleChange,
          handleBlur,
          // values,
          // isValid,
          touched,
          errors,
        }) => (
          <Form>
            <h1>Create dictionary item</h1>
            <label>
              <span>From:</span>
              <input
                name="from"
                required={true}
                type="text"
                onChange={this.handleChange(handleChange)}
                onBlur={handleBlur}
              />
              {
                console.log({ touched }) // tslint:disable-line
            }
              {touched.from && errors.from && (<span className="error">{errors.from}</span>)}
            </label>
            <label>
              <span>To:</span>
              <input
                name="to"
                required={true}
                type="text"
                onChange={this.handleChange(handleChange)}
                onBlur={handleBlur}
              />
              {touched.to && errors.to && (<span  className="error">{errors.to}</span>)}
            </label>
            <label>
              <span>&nbsp;</span>
              <button type="submit">Create dictionary</button>
            </label>
        </Form>
        )}
      </Formik>
    )
  }

  private handleChange = (handleChange: Formik['handleChange']) => (event: React.FormEvent) => {
    handleChange(event);
  }
  private handleSubmit = (values: IDictionaryItem) => {
     this.props.editDictionaryItemRequest(values);

     toast(`Dictionary item ${values.from} / ${values.to} created!`);

     this.setState({
      redirectToHome: true
     });
  }
}

export const mapStateToProps = ({ dictionary }: IDictionaryState) => ({
  list: dictionary.list
});

export const mapDispatchToProps = (dispatch: (action: any) => void) => ({
  editDictionaryItemRequest: (values: IDictionaryItem) => dispatch(editDictionaryItem.request(values))
});
