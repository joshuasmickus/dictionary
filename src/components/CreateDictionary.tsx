import { Form, Formik } from 'formik';
import * as React from 'react';
import { connect } from 'react-redux';

import { IDictionary } from 'src/state/dictionary/dictionaryReducer';
import { createDictionary } from 'src/state/dictionary/dictionaryRoutines';

import './CreateDictionary.css';

interface ICreateDictionaryProps {
  createDictionaryRequest: (values: IDictionary) => void;
}
interface ICreateDictionaryState {
  validated: boolean;
}
const validate = (validater: any) => {
  console.log(validater); // tslint:disable-line
};

class CreateDictionary extends React.Component<ICreateDictionaryProps, ICreateDictionaryState> {
  public state = {
    validated: false
  };

  public render() {
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
          // handleBlur,
          // values,
          // touched,
          // isValid,
          // errors,
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
              />
            </label>
            <label>
              <span>To:</span>
              <input
                name="to"
                required={true}
                type="text"
                onChange={this.handleChange(handleChange)}
              />
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
  private handleSubmit = (values: IDictionary) => {
     this.props.createDictionaryRequest(values);
  }
}

const mapDispatchToProps = (dispatch: (action: any) => void) => ({
  createDictionaryRequest: (values: IDictionary) => dispatch(createDictionary.request(values))
})

export default connect(null, mapDispatchToProps)(CreateDictionary);
