import React from 'react';

class TextField extends React.Component {

    state = {value: ''}

    onInputChange = (e) => this.setState({ value: e.target.value });

    render() {
        const { key, displayName } = this.props.data;

        return (
            <div className='text-field form-field'>
                <input type='text' name={key} placeholder={displayName} value={this.state.value} onChange={this.onInputChange}/>
            </div>
        );
    }

}

export default TextField;
