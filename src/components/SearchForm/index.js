import React, { Component } from 'react';

class SearchForm extends Component {
    state = { location: "" }

    handleSubmit = e => {
        this.props.getResult(this.state.location);
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.location} />
                <input type="submit" value="Search" />
            </form>
        );
    };
};

export default SearchForm;
