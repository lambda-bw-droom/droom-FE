import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './SignupSelector.scss';

export default class SignupSelector extends Component {
	render() {
		return (
			<div className="signup-selector">
				<Link to={"/signup/employer"}>I want to Hire</Link>
				<Link to={"/signup/seeker"}>I want to Work</Link>
			</div>
		)
	}
}
