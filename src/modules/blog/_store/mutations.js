import Types from './types';

const setPosts = (state, posts) => {
	state.posts = posts;
};

export default {
	[Types.MUTATIONS.SET_POSTS]: setPosts
};