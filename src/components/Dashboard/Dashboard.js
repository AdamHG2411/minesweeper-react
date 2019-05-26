import React, { Component } from 'react';
import './Dashboard.css';

const timerImg = require('../../images/stopwatch.png');
const flagImg = require('../../images/mine-marker.png');
const trophyImg = require('../../images/trophy.png');

class Dashboard extends Component {
	render() {
		return (
			<div className="Dashboard">
				<div className="Dashboard-Timer">
					<img src={timerImg} alt="timer" />
					<h2>0</h2>
				</div>
				<div className="Dashboard-Flagged">
					<img src={flagImg} alt="mines flagged" />
					<h2>0 / 12</h2>
				</div>
				<div className="Dashboard-Record">
					<img src={trophyImg} alt="record time" />
					<h2>61</h2>
				</div>
			</div>
		);
	}
}

export default Dashboard;
