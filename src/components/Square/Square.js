import React, { Component } from 'react';
import './Square.css';

class Square extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(evt) {
		console.log('Square: handleClick');
		evt.preventDefault();
		let num = this.props.num;
		this.props.updateClicked(num);
	}

	render() {
		const classes = [
			'Zero',
			'One',
			'Two',
			'Three',
			'Four',
			'Five',
			'Six',
			'Seven',
			'Eight',
			'Mine',
			'Flag',
			'Default'
		];
		let count;
		if (this.props.value > 0 && this.props.value < 9) {
			count = this.props.value.toString();
		} else {
			count = '';
		}
		return (
			<div
				className={`Square Square-${classes[this.props.value]}`}
				num={this.props.num}
				onClick={this.handleClick}
			>
				<p className="Square-Count">{count}</p>
			</div>
		);
	}
}

export default Square;
