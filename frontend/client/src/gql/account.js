import { gql } from '@apollo/client';
const SIGNUP_USER = gql`
mutation SignupUser(
	$fname: String!,
	$token: String!,
	$image: String!,
	$provideId: String!,
	$email: String!

) {
	signupUser(
		fname: $fname,
		token: $token,
		image: $image,
		provideID: $provideId,
		email: $email
) {
		fname
		email
		token
		image
	}
}`;


const UPDATE_USER_PROFILE = gql`
mutation UpdateProfile(
	$fname: String!,
	$email: String!,
	$dob: 	String!,
	$age: 	Int!,
	$phone:	Int!,
	$timezone: String
	$address: String
 

) {
	signupUser(
		fname: $fname,
		email: $email,
		dob: $dob,
		age: $age,
		phone: $phone,
		timezone: $timezone,
		address: $address
) {
		fname
		email
		dob
		age
		phone
		timezone
		address
	}
}`;

export { SIGNUP_USER, UPDATE_USER_PROFILE };
