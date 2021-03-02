import React, { useState } from 'react';
import '../../style/scss/order/index.scss'
import { timezone } from '../../common/variable';

console.log(timezone);
const ProfileComponent = ({ }) => {
	const [ className, setClassName ] = useState({ readonly: false, });
	const [ profileData, setProfileData ] = useState({
		fname: "Anurag Gautam",
		email: "anuraggautam77@Gmail.com",
		dob: "07-07-1987",
		age: "33",
		phone: "8698222624",
		timezone: 5.5,
		address: 'Dharamshala'
	});


	function updateProfile() {
		const newMessageObj = { readonly: !className.readonly };
		setClassName(newMessageObj);
	};


	return (
		<div className="row">
			<div className=" col-12 dashboard-wrapper profile-page">
				<div className="container-fluid dashboard-content ">
					<div className="row">
						<div className="col-md-5 col-sm-12 col-12">
							<div className="page-header">
								<h2 className="pageheader-title">Profile Page </h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="profile-nav col-md-3">
							<div className="panel">
								<div className="user-heading round">
									<a href="#">
										<img src="./img/user.jpg" alt="" />
									</a>
									<h1>{ profileData.fname }</h1>
									<p>{ profileData.email }</p>
								</div>
							</div>
						</div>
						<div className="profile-info col-md-9">
							<div className="panel">
								<div className="panel-body bio-graph-info">
									<a className={ `btn btn-secondary btn-sm  display-${!className.readonly}` }
										onClick={ () => {
											const newMessageObj = { readonly: !className.readonly };
											setClassName(newMessageObj)
										} }
										href="#">Edit  </a>
									<a className={ `btn btn-primary btn-sm 
										display-${className.readonly}` }
										onClick={ () => { updateProfile(); } } href="#">Update  </a>

									<div className="row profile">
										<div className="bio-row">
											<p className={ `display-${!className.readonly}` }><
												span>Name </span>: { profileData.fname }</p>
											<p className={ `display-${className.readonly}` }>
												<span>Name:</span>
												<input type="text" placeholder="Name"
													className={ `form-control col-md-6 ` }
													defaultValue={ profileData.fname }
													onChange={ e => {
														const val = e.target.value;
													} }
													name="name" />
											</p>
										</div>

										<div className="bio-row">
											<p className={ `display-${!className.readonly}` }><span>Phone No </span>: { profileData.phone }</p>
											<p className={ `display-${className.readonly}` }>
												<span>Phone No:</span>
												<input type="text" placeholder="phone" className={ `form-control col-md-6` }
													defaultValue={ profileData.phone }
													onChange={ e => {
														const val = e.target.value;
													} }
													name="phone" />
											</p>
										</div>

										<div className={ `bio-row` }>
											<p><span>Email</span>: anuraggautam77@Gmail.com</p>
										</div>

										<div className="bio-row">
											<p className={ `display-${!className.readonly}` }><span>Age</span>:{ profileData.age } years</p>
											<p className={ `display-${className.readonly}` }>
												<span>AGE:</span>
												<input type="text" placeholder="Age" className={ `form-control col-md-6` }
													defaultValue={ profileData.age }
													onChange={ e => {
														const val = e.target.value;
													} }
													name="age" />
											</p>
										</div>

										<div className="bio-row">
											<p className={ `display-${!className.readonly}` }><span>DOB</span>: { profileData.dob }</p>
											<p className={ `display-${className.readonly}` }>
												<span>DOB:</span>
												<input type="text" placeholder="Date Of Birth" defaultValue={ profileData.dob }
													className={ `form-control col-md-6` }
													onChange={ e => {
														const val = e.target.value;
													} }
													name="dob" />
											</p>
										</div>

										<div className="bio-row">
											<p className={ `display-${!className.readonly}` }><span>Time Zone</span>: { profileData.timezone }</p>
											<p className={ `display-${className.readonly}` }>
												<span>Time Zone:</span>
												<select placeholder="Time Zone" className={ `form-control col-md-6` } name="zone" >
													{
														(() =>
															timezone.map((d, index) => <option key={ index } defaultValue={ d.value }> { d.label }</option>)
														)()
													}
												</select>
											</p>
										</div>
										<div className="bio-row">
											<p className={ `display-${!className.readonly}` }><span>Address</span>: { profileData.address }</p>
											<p className={ `display-${className.readonly}` }>
												<span className="address-field">Address:</span>
												<textarea type="text" placeholder="Address" defaultValue={ profileData.address }
													className={ `form-control col-md-6` }
													onChange={ e => {
														const val = e.target.value;
													} }
													name="address" />
											</p>
										</div>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
	);
};


export default ProfileComponent;
