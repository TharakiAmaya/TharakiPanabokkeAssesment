import React, { Component } from 'react';

export class GetBookList extends Component {

    state ={
        value: ''
    }

    handleChange = event => {
        this.setState({value: event.target.value});
    };

    handleSubmit= event => {
        event.preventDefault();
        const name= this.state.value.replace(/\s+/g, '-').toLowerCase();
        this.props.fetchApi(name);
    };

    render() {
        return (
        
            <form onSubmit={this.handleSubmit} style={formStyle}>
                <label>
                <b> Pick a Book List </b> <br></br>

                <select onChange={this.handleChange} style = {optionStyle}>
                    {this.props.bookLists.map(({ list_name, display_name }, index) => (
                        <option key={index}  value={list_name}>
                             {display_name}
                        </option>
                     ))}
                </select>
                
                </label>
                <input style={inputStyle} type="submit" value="Submit" />
            </form>
        )
    }
}

const formStyle={
    alignItems: 'center',
    background: '#C0C0C0',
    color: '#000000',
    padding: '5px 9px',
    cursor: 'pointer',
    border: '2px solid #A9A9A9',
    fontSize: '18px'
}

const optionStyle={
    alignItems: 'center',
    background: '#A9A9A9',
    color: '#000000',
    padding: '5px 9px',
    cursor: 'pointer',
    border: '2px solid #000000',
    fontSize: '15px',
    marginTop:'10px'
}

const inputStyle={
    marginLeft:'10px',
    background: '#A9A9A9',
    fontSize: '15px',
    padding: '5px 9px',
    border: '2px solid #000000',
    marginTop:'10px'
}
export default GetBookList;
