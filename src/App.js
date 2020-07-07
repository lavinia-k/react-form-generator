import React from 'react';
import FormGenerator from './components/FormGenerator';

class DemoApp extends React.Component {

  state = {
    form: {
      formTitle: 'User Registration',
      submissionMessage: 'Thank you for submitting!',
      fields: [
        {
          key: 'fullname',
          displayName: 'Full Name',
          type: 'text',
          pattern: '([A-z.-]+\\s?\\b){2,6}',
          required: true,
        },
        {
          key: 'dateofbirth',
          displayName: 'Date Of Birth',
          type: 'date',
          pattern: '([A-z.-]+\\s?\\b){2,6}',
          required: true,
        },
        {
          key: 'gender',
          displayName: 'Gender Identity',
          type: 'radio',
          options: ['Woman', 'Man', 'Other']
        },
        {
          key: 'contactnumber',
          displayName: 'Contact Number',
          type: 'text',
          pattern: '[0-9-]+'
        },
        {
          key: 'guardianconsent',
          displayName: 'Require Guardian Consent?',
          type: 'checkbox',
          pattern: '([A-z.-]+\\s?\b){2,6}',
          options: ['true']
        },
        {
          key: 'guardianfullname',
          displayName: 'Guardian Full Name',
          groupKey: 'guardiandetails',
          type: 'text',
          pattern: '([A-z.-]+\\s?\\b){2,6}',
          dependsOn: 'guardianconsent',
          required: true
        },
        {
          key: 'guardianphone',
          displayName: 'Guardian Phone Number',
          groupKey: 'guardiandetails',
          type: 'text',
          pattern: '[0-9-]+',
          dependsOn: 'guardianconsent',
          required: true
        },
      ]
    }
  }

  handleSubmission = (formSubmission) => {
    this.setState({
        mostRecentSubmission: formSubmission
    })
  }

  render() {
    return (
      <div className='DemoApp'>
        <h1>DemoApp</h1>
        <div className='formContainer'>
          <h2>1. Generated Form</h2>
          <FormGenerator form={this.state.form} submissionHandler={this.handleSubmission}/>
        </div>
        <div className='recentSubmission'>
          <h2>2. Most Recent Form Submission</h2>
          <pre>
            {this.state.mostRecentSubmission ? JSON.stringify(this.state.mostRecentSubmission, null, 2) : "No recent submissions"}
          </pre>
        </div>
      </div>
    );
  }
  
}

export default DemoApp;
