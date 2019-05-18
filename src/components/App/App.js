import React, { Component } from 'react';
import Dashboard from '../Dashboard/Dashboard.js';
import Grid from '../Grid/Grid.js';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			numRows: 8,
			numColumns: 8
		};
		this.changeGrid = this.changeGrid.bind(this);
	}

	changeGrid(input) {
		this.setState({
			numRows: input.numRows,
			numColumns: input.numColumns
		});
	}

	render() {
		return (
			<div className="App">
				<h1>Minesweeper</h1>
				<Dashboard {...this.state} changeGrid={this.changeGrid} />
				<Grid {...this.state} />
			</div>
		);
	}
}

export default App;
