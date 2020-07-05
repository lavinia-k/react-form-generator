# react-form-generator
Components to generate a form based on the JSON schema provided to it.

> WORK IN PROGRESS

## Purpose
Creates a React component that can render different forms, such as sign up, mailing list, and feedback forms. Given the proposed variety of form types, a single component that can be easily adapted is the approach adopted here.

## Details
A React component that can accept a JSON-based form definition via a prop and produce a form.
 
The example in this repository should be able to collect a person’s details with the following fields:

```
name
    text based
    should enforce the need for a first and last name (separated by a space)
date of birth
    date based
    required, should be older than 18
gender
    options based (male/female)
    optional
contact number
    text based
    optional
    allow for multiple values (e.g. mobile, home, etc)
require guardian consent
    checkbox
    optional
guardian details (name, contact)
    text based
    required/applicable if consent checkbox is ticked
```

The form provides the resulting form data on successful submission. A valid output for the form looks like this:

```
{
    name: "John Foo",
    dob: "1990-01-01",
    gender: 1,
    contact: [{
        type: "mobile",
        value: "0400123123"
    },{
        type: "home",
        value: "610000000"
    }],
    guardian: {
        name: "Jane Foo",
        contact: "0400123123"
    }
}
```

The form is generated at runtime based on a JSON schema provided. Changing the schema will alter the fields that are shown and the data that is returned on submit.