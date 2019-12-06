import React from "react";
import { Form, Field } from "simple-react-form";
import "./App.css";

export default class App extends React.Component {
  state = {};

  render() {
    return (
      <div className="app">
        <div className="section">
          <Form state={this.state} onChange={state => this.setState(state)}>
            <Field fieldName="name" label="Name" type={Text} />
          </Form>
        </div>
      </div>
    );
  }
}
