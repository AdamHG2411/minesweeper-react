import React, { Component } from 'react';
import Square from '../Square/Square.js';
import './Grid.css';

class Grid extends Component {
	render() {
		let [ numRows, numColumns ] = this.props;
		let grid = [];
		for (let i = 0; i < numRows; i++) {
			let newRow = [];
			for (let j = 0; j < numColumns; j++) {
				newRow.push(<Square row={i} column={j} />);
			}
			grid.push(newRow);
		}
		let rows = grid.map((row) => {
			<div className="Grid-Row">{row}</div>;
		});

		return <div className="Grid">{rows}</div>;
	}
}

export default Grid;
