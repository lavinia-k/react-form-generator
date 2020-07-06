import React from 'react';
import { render, screen } from '@testing-library/react';
import DemoApp from './App';
import FormGenerator from './components/FormGenerator';

const testValidJsonFormSpec = {
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

test('renders DemoApp heading', () => {
  const { getByText } = render(<DemoApp />);
  const heading = getByText(/DemoApp/i);
  expect(heading).toBeInTheDocument();
});

test('generates fields in JSON spec', () => {
  const { getByText } = render(<FormGenerator form={testValidJsonFormSpec} />);
  
  testValidJsonFormSpec.fields.map(field => {
    const specDisplayName = field.displayName;
    const displayName = screen.getAllByText(new RegExp(specDisplayName, "i"))[0];
    expect(displayName).toBeInTheDocument();
  })
});

