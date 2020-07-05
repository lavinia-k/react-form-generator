import React from 'react';
import TextField from './TextField'

class FormGenerator extends React.Component {

    onInputChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { formTitle, fields } = this.props.form;

        return (
            <div className='form-generator'>
                <h2>Form Generator</h2>
                <div className='form'>
                    <h3>{formTitle}</h3>
                    {fields.map(field => (
                        <TextField data={field}/>
                    ))}
                </div>
            </div>
          );
    }
}

export default FormGenerator;
