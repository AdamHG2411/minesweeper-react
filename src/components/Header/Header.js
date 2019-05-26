import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
	constructor(props) {
		super(props);
		console.log(this.props);
		this.state = {
			custom: false,
			rows: 8,
			columns: 8
		};
	}

	render() {
		let gridRowsColumns;
		if (this.state.custom) {
			gridRowsColumns = (
				<div className="Header-RowsColumns">
					<input type="text" name="rows" placeholder="Rows" />
					<input type="text" name="columns" placeholder="Columns" />
				</div>
			);
		} else {
			gridRowsColumns = (
				<div className="Header-RowsColumns">
					<h3>Rows: {this.state.rows}</h3>
					<h3>Columns: {this.state.columns}</h3>
				</div>
			);
		}

		return (
			<div className="Header">
				<h1 className="Header-Title">Minesweeper</h1>
				<form className="Header-GridForm">
					<select name="grid-size" className="Header-Selector">
						<option defaultValue value="small">
							Small
						</option>
						<option value="medium">Medium</option>
						<option value="large">Large</option>
						<option value="custom">Custom</option>
					</select>
					{gridRowsColumns}
					<button className="Header-GridButton">New Grid</button>
				</form>
			</div>
		);
	}
}

export default Header;
