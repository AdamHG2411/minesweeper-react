import React, { Component } from 'react';
import './Dashboard.css';

class Dashboard extends Component {
	render() {
		return (
			<div>
				<div className="Dashboard-Stopwatch">
					<img src="#" alt="stopwatch" />
					<h2>0</h2>
				</div>
				<div className="Dashboard-Flagged">
					<img src="#" alt="mines flagged" />
					<h2>0 / 12</h2>
				</div>
				<div>
					<img src="#" alt="record time" />
					<h2>61</h2>
				</div>
			</div>
		);
	}
}

export default Dashboard;
