import React, { Component } from 'react';
import Square from '../Square/Square.js';
import './Grid.css';

class Grid extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displayValues: [],
			trueValues: [],
			clicked: null,
			seeded: false
		};
		this.seedGrid = this.seedGrid.bind(this);
		this.updateDisplay = this.updateDisplay.bind(this);
		this.updateClicked = this.updateClicked.bind(this);
	}

	updateDisplay(num) {
		console.log('Grid: updateDisplay');
		let newArray = this.state.displayValues;
		newArray[num] = this.state.trueValues[num];
		this.setState({ displayValues: newArray });
	}

	updateClicked(num) {
		console.log('Grid: updateClicked');
		this.setState({ clicked: num });
		if (!this.state.seeded) {
			this.seedGrid(num);
		} else {
			this.updateDisplay(num);
		}
	}

	seedGrid(num) {
		console.log(`Grid: seedGrid - clicked ${num}`);
		let numMines = Math.floor(this.props.numRows * this.props.numColumns * 0.2);
		let trueValues = [];
		for (let i = 0; i < numMines; i++) {
			trueValues.push(9);
		}
		for (let i = 0; i < this.props.numRows * this.props.numColumns - numMines - 1; i++) {
			trueValues.push(12);
		}
		let curIndex = trueValues.length;
		let tempValue, randIndex;
		while (0 !== curIndex) {
			randIndex = Math.floor(Math.random() * curIndex);
			curIndex -= 1;
			tempValue = trueValues[curIndex];
			trueValues[curIndex] = trueValues[randIndex];
			trueValues[randIndex] = tempValue;
		}
		let before = trueValues.slice(0, num);
		let after = trueValues.slice(num);
		let finalValues = before.concat([ 12 ], after);
		for (let i = 0; i < finalValues.length; i++) {
			let mineCount;
			if (finalValues[i] === 12) {
				let numColumns = this.props.numColumns;
				let numRows = this.props.numRows;
				let topCheck = i >= numColumns;
				let leftCheck = i % numColumns !== 0;
				let rightCheck = i % numColumns !== numColumns - 1;
				let bottomCheck = i <= numRows * numColumns - numColumns - 1;
				mineCount = 0;
				if (leftCheck && topCheck && finalValues[i - numColumns - 1] === 9) {
					mineCount += 1;
				}
				if (topCheck && finalValues[i - numColumns] === 9) {
					mineCount += 1;
				}
				if (topCheck && rightCheck && finalValues[i - numColumns + 1] === 9) {
					mineCount += 1;
				}
				if (leftCheck && finalValues[i - 1] === 9) {
					mineCount += 1;
				}
				if (rightCheck && finalValues[i + 1] === 9) {
					mineCount += 1;
				}
				if (leftCheck && bottomCheck && finalValues[i + numColumns - 1] === 9) {
					mineCount += 1;
				}
				if (bottomCheck && finalValues[i + numColumns] === 9) {
					mineCount += 1;
				}
				if (bottomCheck && rightCheck && finalValues[i + numColumns + 1] === 9) {
					mineCount += 1;
				}
				finalValues[i] = mineCount;
			}
		}
		this.setState({ trueValues: finalValues, seeded: true });
	}

	render() {
		console.log('Grid: render');
		console.log(this);
		let grid = [];
		let newRow;
		for (let i = 0; i < this.props.numRows; i++) {
			newRow = [];
			for (let j = 0; j < this.props.numColumns; j++) {
				newRow.push({
					row: i,
					column: j,
					num: i * this.props.numColumns + j
				});
			}
			grid.push(newRow);
		}
		console.log(grid);
		let rows = grid.map((row, i) => {
			return (
				<div className="Grid-Row" key={i}>
					{row.map((square, j) => {
						return (
							<Square
								{...square}
								value={this.state.displayValues[square.num]}
								key={j}
								updateClicked={this.updateClicked}
							/>
						);
					})}
				</div>
			);
		});
		return <div className="Grid">{rows}</div>;
	}

	componentDidMount() {
		console.log('Grid: componentDidMount');
		let displayValues = [];
		for (let i = 0; i < this.props.numRows * this.props.numColumns; i++) {
			displayValues.push(11);
		}
		this.setState({ displayValues });
	}

	componentDidUpdate() {
		console.log('Grid: componentDidUpdate');
		if (
			this.state.clicked &&
			this.state.trueValues &&
			this.state.displayValues &&
			this.state.trueValues[this.state.clicked] !== this.state.displayValues[this.state.clicked]
		) {
			this.updateDisplay(this.state.clicked);
		}
	}
}

export default Grid;
