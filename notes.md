# Notes


## Potential input structure

(Written in YAML for ease of taking notes)

```
form:
    title: string,
    fields: [
        {
            fieldName: string,
            fieldType: string,      # string, integer, float, timestamp
            fieldDisplay: string,   # text, checkbox, button, toggle, radio
            optional: boolean,
            allowedValues: array,
            fieldGroup: string,
            dependsOn: []
        }
    ]
    size: large
```

## Features

* JSON Validator (out of scope)
* FormGenerator(takes prop), Form, Field Group, Form Fields


## Original Example
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