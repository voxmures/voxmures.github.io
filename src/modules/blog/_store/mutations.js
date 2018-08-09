import Types from './types';

/* PRIVATE METHODS */
const parseContent = (content) => {
	let start = content.indexOf(content.split('\n')[1]),
		end = content.indexOf(content.split('\n')[0], start);
	
	let info = content
		.substring(start, end - 1)
		.split('\n')
		.reduce((res, attr) => {
			let key = attr.split(':')[0],
				val = attr.split(':')[1].trim();
			res[key] = val;
			return res;
		}, {});

	return {
		...info,
		content: content.substring(end + content.split('\n')[0].length)
	};
};

/* PUBLIC METHODS */
const setPosts = (state, posts) => {
	state.posts = posts.map(post => ({
		id: post.id,
		...parseContent(post.content)
	}));
};

export default {
	[Types.MUTATIONS.SET_POSTS]: setPosts
};