import React from 'react';
import PropTypes from 'prop-types';
import BasicFormField from './BasicFormField'

class FormGenerator extends React.Component {

    state = {
        formInput: {}
    }
    
    resetFormInputs = () => {
        return Object.fromEntries(this.props.form.fields.map(field => [field.key, '']));
    }

    handleSubmit = (e) => {
        var filteredSubmission = Object.fromEntries(Object.entries(this.state.formInput).filter(([key,val]) => this.includeField(key) && val));

        e.preventDefault();
        this.setState({
            formInput: this.resetFormInputs()
        })

        this.props.submissionHandler(filteredSubmission);

        alert(this.props.form.submissionMessage);
    }

    onInputChange = (e) => {
        var { name, type, value } = e.target;
        var translatedValue = (type === 'checkbox') ? (this.state.formInput[name] === value ? "" : value) : value;

        this.setState({
            formInput: { 
                ...this.state.formInput,
                [e.target.name]: translatedValue
            }
        })
    };

    includeField = (fieldKey) => {
        var fieldConsidered = this.props.form.fields.filter(field => field.key === fieldKey)[0]

        if (typeof fieldConsidered.dependsOn === 'undefined') {
            return true;
        } else {
            return (this.state.formInput[fieldConsidered.dependsOn] ? true : false);
        }
    }

    render() {
        const { formTitle, fields } = this.props.form;
        const { formInput } = this.state;

        return (
            <div className='form-generator'>
                <div className='form'>
                    <form onSubmit={this.handleSubmit}>
                        <h3>{formTitle}</h3>
                        {fields.map(field => {
                            if (this.includeField(field.key)) {
                                return <BasicFormField key={field.key} data={field} value={formInput[field.key]} onInputChange={this.onInputChange}/>;
                            } else {
                                return null;
                            }
                        })}
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
          );
    }
}

FormGenerator.propTypes = {
    form: PropTypes.object.isRequired,
    submissionHandler: PropTypes.func.isRequired
}

export default FormGenerator;
