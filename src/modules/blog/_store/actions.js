import Types from './types';
import api from '../_api';

/* PRIVATE METHODS */
const fetchPost = (sha) => {
	return new Promise((resolve, reject) => {
		return api.fetchPost(sha)
		.then((post) => resolve(post))
		.catch((error) => reject(error));
	});
};

/* PUBLIC METHODS */
const fetchPosts = ({ commit }) => {
	return new Promise((resolve, reject) => {
		return api.fetchPosts()
		.then((contents) => {
			Promise.all(contents.map(content => fetchPost(content.sha)))
			.then((blobs) => {
				let posts = blobs.map(blob => ({
					id: blob.sha,
					content: atob(blob.content)
				}));
				commit(Types.MUTATIONS.SET_POSTS, posts);
				resolve();
			})
			.catch((error) => reject(error));
		});
	});
};

export default {
	[Types.ACTIONS.FETCH_POSTS]: fetchPosts
};