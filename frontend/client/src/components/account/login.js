import React, { Component, Fragment } from "react";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { setAccessToken, getAccessToken } from '../../common/utils';
import { Redirect, useHistory } from 'react-router-dom'

import { SIGNUP_USER } from "../../gql/account";
import { useMutation } from "@apollo/client";

import '../../style/scss/login/index.scss'

import client from '../../apollo';

const SignInComponent = ({ }) => {
	const [ signupuser ] = useMutation(SIGNUP_USER);
	const history = useHistory();


	function responseGoogle(response) {
		try {
			const idToken = response.getAuthResponse().id_token;
			const variable = {
				fname: response.profileObj.name,
				token: idToken,
				image: response.profileObj.imageUrl,
				provideId: "Google",
				email: response.profileObj.email
			}
			signInUser(variable);

		} catch (err) {
			onFailure(err);
		}

	};



	function responseFacebook(response) {
		try {
			const idToken = response.accessToken,
				variable = {
					fname: response.name,
					token: idToken,
					image: response.picture.data.url,
					provideId: "Facebook",
					email: response.email
				}
			signInUser(variable);

		} catch (err) {
			onFailure(err);
		}
	}

	/**  social Login check*/

	function signInUser(variables) {

		signupuser({
			variables
		}).then(function ({ data }) {
			setAccessToken(data.signupUser.token);
			history.push("/");
		});
	}

	function onFailure(err) {
		console.error("Error : ", err);
	}

	const auth = getAccessToken();

	if (!auth) {
		console.log(client);
		return (
			<Fragment>
				<div className="content login-section">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-md-5">
								<span className="d-block text-center my-4">
									<h5>
										Sign In to <strong>MyShop</strong>
									</h5>
								</span>
								<div className="social-login text-center">
									<FacebookLogin
										appId="450056729518434"
										autoLoad={ false }
										fields="name,email,picture"
										callback={ responseFacebook }
										size="small"
										textButton="Login with Facebook"
									/>
									<br />
									<br />
									<br />

									<GoogleLogin
										clientId="730905407940-538dlfqcmnmu6k899fc2saescg0kuf5v.apps.googleusercontent.com"
										onSuccess={ responseGoogle }
										onFailure={ onFailure }
										isSignedIn={ false }
										buttonText="Login with Google"
									/>
								</div>
							</div>
							<div className="col-md-2 text-center">— or —</div>
							<div className="col-md-5 contents">
								<div className="form-block">
									<div className="mb-4">
										<h3>
											Sign In to <strong>MyShop</strong>
										</h3>
										<p className="mb-4">Dev is in progress</p>
									</div>
									<form action="#" method="post">
										<div className="form-group first">
											<label htmlFor="username">Username</label>
											<input
												type="text"
												className="form-control"
												id="username"
											/>
										</div>
										<div className="form-group last mb-4">
											<label htmlFor="password">Password</label>
											<input
												type="password"
												className="form-control"
												id="password"
											/>
										</div>
										<div className="d-flex mb-5 align-items-center">
											<span className="ml-auto">
												<a href="#" className="forgot-pass">
													Forgot Password
												</a>
											</span>
										</div>
										<input
											type="submit"
											value="Log In"
											className="btn btn-pill text-white btn-block btn-primary"
										/>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Fragment>
		);
	} else {
		return <Redirect to="/" />

	}

}

export default SignInComponent;
