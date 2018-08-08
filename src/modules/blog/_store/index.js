import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const state = {
	posts: []
};

export default {
	name: 'blog',
	state,
	actions,
	mutations,
	getters
};