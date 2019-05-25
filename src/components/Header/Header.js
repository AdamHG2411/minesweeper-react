import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
	constructor(props) {
		super(props);
		console.log(this.props);
		this.state = {
			gridsize: 'small',
			rows: 8,
			columns: 8
		};
		this.handleChange = this.handleChange.bind(this);
		this.newGrid = this.newGrid.bind(this);
	}

	handleChange(evt) {
		console.log('Header: handleChange');
		this.setState({
			[evt.target.name]: evt.target.value
		});
	}

	newGrid(evt) {
		evt.preventDefault();
		console.log('Header: newGrid');
		let rows;
		let columns;
		switch (this.state.gridsize) {
			case 'small':
				console.log('small');
				rows = 8;
				columns = 8;
				break;
			case 'medium':
				console.log('medium');
				rows = 16;
				columns = 16;
				break;
			case 'large':
				console.log('large');
				rows = 24;
				columns = 16;
				break;
			case 'custom':
				console.log('custom');
				rows = this.state.rows;
				columns = this.state.columns;
				break;
			default:
				rows = 8;
				columns = 8;
		}
		let size = {
			numRows: rows,
			numColumns: columns
		};
		console.log(size);
		this.props.changeGrid(size);
	}

	render() {
		let gridRowsColumns;
		if (this.state.gridsize === 'custom') {
			gridRowsColumns = (
				<div className="Header-RowsColumns">
					<input type="text" name="rows" placeholder="Rows" onChange={this.handleChange} />
					<input type="text" name="columns" placeholder="Columns" onChange={this.handleChange} />
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
				<form className="Header-GridForm" onSubmit={this.newGrid}>
					<select name="gridsize" className="Header-Selector" onChange={this.handleChange}>
						<option defaultValue value="small">
							Small
						</option>
						<option value="medium">Medium</option>
						<option value="large">Large</option>
						<option value="custom">Custom</option>
					</select>
					{gridRowsColumns}
					<input type="submit" className="Header-GridButton" value="New Grid" />
				</form>
			</div>
		);
	}
}

export default Header;
