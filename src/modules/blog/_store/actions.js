import Types from './types';
import api from '../_api';

const fetchPosts = ({ commit }) => {
	return new Promise((resolve, reject) => {
		return api.fetchPosts()
			.then((data) => {
				commit(Types.MUTATIONS.SET_POSTS, data.map(post => ({
					id: post.sha,
            		title: post.name.replace(/\.md$/, '').slice(post.name.lastIndexOf('-') + 1),
            		date: post.name.slice(0, post.name.lastIndexOf('-'))
				})));
			})
	})
};

export default {
	[Types.ACTIONS.FETCH_POSTS]: fetchPosts
};