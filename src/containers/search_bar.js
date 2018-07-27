import React, {Component} from 'react';

class SearchBar extends Component {

	constructor(props) {
		super(props);

		this.state = {
			term: ''
		};
	}

	render() {
		return (
			<form className="input-group">
				<input placeholder="Search for city"
					className="form-control"
					vale={this.state.term}
				></input>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-primary">Submit</button>
				</span>
			</form>
		);
	}
}

export default SearchBar;