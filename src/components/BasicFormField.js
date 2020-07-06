import React from 'react';
import PropTypes from 'prop-types';

function BasicFormField(props) {

    const { data: {key, displayName, type, pattern, required, options}, value, onInputChange } = props;

    var inputElements;
    if (typeof options !== 'undefined') {
        inputElements = options.map(option => (
            <React.Fragment key={option}>
                <input type={type} name={key} value={option} required={required} pattern={pattern} checked={option === value} onChange={onInputChange}/>
                <label htmlFor={option}>{option}</label>
            </React.Fragment>
        ));
    } else {
        inputElements = (
            <React.Fragment>
                <input type={type} name={key} value={value} required={required} pattern={pattern} onChange={onInputChange}/>
            </React.Fragment>
        );
    }

    return (
        <div className='text-field form-field'>
            <label className='field' htmlFor={key}>{displayName}</label>
            {inputElements}
        </div>
    );
}

BasicFormField.propTypes = {
    value: PropTypes.string,
    data: PropTypes.object.isRequired,
    onInputChange: PropTypes.func.isRequired
}

export default BasicFormField;
