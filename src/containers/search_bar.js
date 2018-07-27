import React, {Component} from 'react';

class SearchBar extends Component {

	constructor(props) {
		super(props);

		this.state = {
			term: ''
		};

		this.onInputChange = this.onInputChange.bind(this);
	}

	onInputChange(event) {
		let newTerm = event.target.value;
		console.log(newTerm)
		this.setState({
			term: newTerm
		});
	}

	render() {
		return (
			<form className="input-group">
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

export default SearchBar;