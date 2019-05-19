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
		console.log('App: changeGrid');
		this.setState({
			numRows: input.numRows,
			numColumns: input.numColumns
		});
	}

	startTimer() {
		console.log('App: startTimer');
	}

	stopTimer() {
		console.log('App: stopTimer');
	}

	render() {
		console.log('App: render');
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
