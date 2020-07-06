import React from 'react';
import PropTypes from 'prop-types';
import BasicFormField from './BasicFormField'

class FormGenerator extends React.Component {

    state = {
        formInput: {},
        mostRecentSubmission: {}
    }
    
    resetFormInputs = () => {
        return Object.fromEntries(this.props.form.fields.map(field => [field.key, '']));
    }

    handleSubmit = (e) => {
        alert('These values were submitted: ' + JSON.stringify(this.state.formInput));
        e.preventDefault();
        this.setState({
            formInput: this.resetFormInputs()
        })
    }

    onInputChange = (e) => {
        this.setState({
            formInput: { 
                ...this.state.formInput,
                [e.target.name]: e.target.value 
            }
        })
    };

    render() {
        const { formTitle, fields } = this.props.form;
        const { formInput } = this.state;

        return (
            <div className='form-generator'>
                <h2>Form Generator</h2>
                <div className='form'>
                    <form onSubmit={this.handleSubmit}>
                        <h3>{formTitle}</h3>
                        {fields.map(field => (
                            <BasicFormField key={field.key} data={field} value={formInput[field.key]} onInputChange={this.onInputChange}/>
                        ))}
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
          );
    }
}

FormGenerator.propTypes = {
    form: PropTypes.object.isRequired
}

export default FormGenerator;
