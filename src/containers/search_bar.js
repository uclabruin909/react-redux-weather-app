import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {

	constructor(props) {
		super(props);

		this.state = {
			term: ''
		};

		this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		let newTerm = event.target.value;
		this.setState({
			term: newTerm
		});
	}

	onFormSubmit(event) {
		event.preventDefault();
    let city = this.state.term;

    this.props.fetchWeather(city);

    //reset term state to refresh input
    this.setState({
      term: ''
    });

	}

	render() {
		return (
			<form className="input-group" onSubmit={this.onFormSubmit}>
				<input placeholder="Search for city"
					className="form-control"
					value={this.state.term}
					onChange={this.onInputChange}
				></input>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-primary">Submit</button>
				</span>
			</form>
		);
	}

}

function mapDispatchToProps(dispatch) {

  return bindActionCreators({
    fetchWeather: fetchWeather,
  }, dispatch);

}

export default connect(null, mapDispatchToProps)(SearchBar);