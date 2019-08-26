import React, { useState, useContext } from 'react';

import UserContext from '../context/UserContext';

const Login = props => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const user = useContext(UserContext);

	const onUsernameChange = e => {
		setUsername(e.target.value);
	}

	const onPasswordChange = e => {
		setPassword(e.target.value);
	}

	const onLoginClick = (e) => {
		e.preventDefault();
		user.dispatch({
			type: 'login',
			payload: {
				name: username,
				id: 2,
			}
		});
		props.history.goBack();
	}

	return (
	  <form onSubmit={e => onLoginClick(e)}>
			<h1>Login</h1>
    	<input
				type="text"
				value={username}
				placeholder="Enter Username"
				onChange={e => onUsernameChange(e)}
			/>
			<br />
    	<input
				type="password"
				value={password}
				placeholder="Enter Password"
				onChange={e => onPasswordChange(e)}
				required
			/>
			<br />
			<button>Log In</button>
  	</form>
	);
}

export default Login;
