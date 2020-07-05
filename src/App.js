import React from 'react';
import FormGenerator from './components/FormGenerator';

class DemoApp extends React.Component {

  state = {
    form: {
      formTitle: 'User Registration',
      fields: [
        {
          key: 'name',
          displayName: 'Name',
          type: 'text'
        },
        {
          key: 'gender',
          displayName: 'Gender',
          type: 'boolean'
        }
      ]
    }
  }

  render() {
    return (
      <div className="DemoApp">
        <h1>DemoApp</h1>
        <FormGenerator form={this.state.form}/>
      </div>
    );
  }
  
}

export default DemoApp;
