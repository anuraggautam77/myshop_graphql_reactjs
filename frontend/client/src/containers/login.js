import React, { Component, Fragment } from "react";
import HeaderComponent from "../components/header/header";
import SignInComponent from "../components/account/login";


class LoginPage extends Component {

	render() {
		return (
			<Fragment>
				<HeaderComponent />
				<SignInComponent />
			</Fragment>
		);
	}
}

export default LoginPage;
