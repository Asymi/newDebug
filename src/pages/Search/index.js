import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SearchForm, Result } from '../../components';
import { getResult } from '../../actions';

class Search extends Component {
    getResult = searchTerm => this.props.getResult(searchTerm);

    renderResult = () => this.props.loading ? <p>Loading . . .</p> : <Result result={this.props.result}/>

    render() {
        return (
            <div id="search">
                Where do you want to search?
                <SearchForm getResult={this.getResult}/>

                <h1>{this.props.location}</h1>

                { this.props.error ? <p>Oops there's been an error!</p> : this.renderResult() }
                
                
            </div>
        );
    }
}

export const mSTP = state => ({
    result: state.result,
    location: state.location,
    loading: state.loading,
    error: !state.loading && !state.result.sunrise
});

export default connect(null, { getResult })(Search);
