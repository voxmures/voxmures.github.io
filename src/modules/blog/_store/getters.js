import Types from './types';

const getPosts = (state) => state.posts;

const getPost = (state) => (id) => state.posts.find(p => p.id === id);

export default {
	[Types.GETTERS.GET_POSTS]: getPosts,
	[Types.GETTERS.GET_POST]: getPost
};