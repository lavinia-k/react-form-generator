import React from 'react';
import FormGenerator from './components/FormGenerator';

class DemoApp extends React.Component {

  state = {
    form: {
      formTitle: 'User Registration',
      fields: [
        {
          key: 'fullname',
          displayName: 'Full Name',
          type: 'text',
          pattern: '([A-z.-]+\\s?\\b){2,6}',
          required: true,
        },
        {
          key: 'gender',
          displayName: 'Gender Identity',
          type: 'radio',
          required: false,
          options: ['Woman', 'Man', 'Other']
        },
        {
          key: 'contactnumber',
          displayName: 'Contact Number',
          type: 'text',
          pattern: '[0-9-]+',
          required: true,
        },
        {
          key: 'guardianconsent',
          displayName: 'Require Guardian Consent?',
          type: 'checkbox',
          pattern: '([A-z.-]+\\s?\b){2,6}'
        },
        {
          key: 'guardianfullname',
          displayName: 'Full Name',
          groupDisplayName: 'guardiandetails',
          type: 'text',
          pattern: '([A-z.-]+\\s?\\b){2,6}',
          dependsOn: 'guardianconsent'
        },
        {
          key: 'guardianphone',
          displayName: 'Phone Number',
          groupDisplayName: 'guardiandetails',
          type: 'text',
          pattern: '[0-9-]+',
          dependsOn: 'guardianconsent'
        },
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
