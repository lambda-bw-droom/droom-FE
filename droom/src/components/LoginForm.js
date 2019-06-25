import React, { Component } from 'react'

export default class LoginForm extends Component {
	render() {
		return (
			<div className="login-form">
				<form>
					<input type="email" name="email" placeholder="Email" required />
					<input type="password" name="password" placeholder="Password" required />
					<button type="submit">Login</button>
				</form>
			</div>
		)
	}
}
