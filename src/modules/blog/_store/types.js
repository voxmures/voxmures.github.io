import format from '@/utils/types';

const types = {
	ACTIONS: [
		'FETCH_POSTS'
	],
	MUTATIONS: [
		'SET_POSTS'
	],
	GETTERS: [
		'GET_POSTS',
		'GET_POST'
	]
};

export default format(types);