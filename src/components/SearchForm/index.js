import React, { Component } from 'react';

class SearchForm extends Component {
    state = { location: "" }

    handleInput = e => {
        this.setState({ location: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.getResult(this.state.location);
        this.setState({ location: "" })
        //this.setState({ location: e.target.userInput.value })
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="userInput" value={this.state.location} onChange={this.handleInput} />
                <input type="submit" value="Search" />
            </form>
        );
    };
};

export default SearchForm;
