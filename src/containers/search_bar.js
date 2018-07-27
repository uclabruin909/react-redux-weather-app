import React, {Component} from 'react';

class SearchBar extends Component {
	render() {
		return (
			<form className="input-group">
				<input></input>
				<span className="input-group-btn">
					<button type="submit" className="btn btn-primary">Submit</button>
				</span>
			</form>
		);
	}
}

export default SearchBar;