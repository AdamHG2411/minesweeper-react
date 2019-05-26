import React, { Component } from 'react';
import Header from '../Header/Header.js';
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
				<Header />
				<Dashboard />
				<Grid {...this.state} />
			</div>
		);
	}
}

export default App;
