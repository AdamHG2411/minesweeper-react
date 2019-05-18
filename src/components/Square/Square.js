import React, { Component } from 'react';
import './Square.css';

class Square extends Component {
	constructor(props) {
		super(props);
		this.state = {
			classVal: 10
		};
	}

	handleClick(evt) {
		evt.preventDefault();
		this.setState({ classVal: this.props.values[this.props.key] });
	}

	render() {
		const classes = [ 'Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Mine', 'Default' ];
		return (
			<div
				className={`Square Square-${classes[this.state.classVal]}`}
				row={this.props.row}
				column={this.props.column}
			/>
		);
	}
}

export default Square;
