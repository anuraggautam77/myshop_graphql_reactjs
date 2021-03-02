import { gql, query } from 'apollo-boost';

const getALLMovies = gql`
	query {
		movies {
			voteavg
			movieid
			path
			title
			isadult
			genre
			language
			company
			country
			overview
		}
	}
`;

const getMovieDetail = gql`
	query($id: ID!) {
		moviedetail(id: $id) {
			voteavg
			backdrop 
			movieid
			path
			title
			isadult
			genre
			language
			votecount
			company
			country
			overview
			actors {
				name
				image
				__typename
			}
			crew {
				name
				image
				job
				__typename
			}
			date
			__typename
		}
		__typename
	}
`;

const getPouplarlity = gql`
	query {
		popularity {
			title
			language
			movieid
			date
			path
			voteavg
			votecount
		}
	}
`;

const getTopRated = gql`
	query {
		toprated {
			title
			language
			movieid
			date
			path
			voteavg
		}
	}
`;

const getlatestMovies = gql`
	query {
		latestMovies {
			title
			language
			movieid
			date
			path
			voteavg
			backdrop
		}
	}
`;

const getTopFirstgenMovie = gql`
	query($context:String!) {
		topFirstgenMovie(context:$context) {
			title
			language
			movieid
			date
			genre
			path
			voteavg
		}
	}
`;

const getTopSecondgenMovie = gql`
	query($context:String!) {
		topSecondgenMovie(context:$context) {
			title
			language
			movieid
			genre
			date
			path
			voteavg
		}
	}
`;

const updateRating = gql`
	mutation ($movieid: ID!, $voteavg: String, $votecount: String) {
		updateRating(movieid: $movieid, voteavg: $voteavg, votecount: $votecount) {
			voteavg
			movieid
			votecount
		}
	}
`;

const subscribeChange = gql`
	subscription {
		ratingUpdate {
			voteavg
			movieid
		}
	}
`;

export {
	getALLMovies,
	subscribeChange,
	getPouplarlity,
	getTopRated,
	getlatestMovies,
	getTopFirstgenMovie,
	getTopSecondgenMovie,
	getMovieDetail,
	updateRating
};
