import { Form, Formik } from 'formik';
import * as React from 'react';

interface ICreateDictionaryState {
  validated: boolean;
}
const validate = (validater: any) => {
  console.log(validater); // tslint:disable-line
};

export class CreateDictionary extends React.Component<{}, ICreateDictionaryState> {
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
            <label>From:</label>
            <input
              name="from"
              required={true}
              type="text"
              onChange={this.handleChange(handleChange)}
            />
            <label>To:</label>
            <input
              name="to"
              required={true}
              type="text"
              onChange={this.handleChange(handleChange)}
            />
            <button type="submit">Create dictionary</button>
        </Form>
        )}
      </Formik>
    )
  }

  private handleChange = (handleChange: Formik['handleChange']) => (event: React.FormEvent) => {
    handleChange(event);
  }
  private handleSubmit = (event: any) => {
     console.log(event); // tslint:disable-line
  }
}
