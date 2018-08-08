import Types from './types';

const getPosts = (state) => state.posts;

export default {
	[Types.GETTERS.GET_POSTS]: getPosts
};