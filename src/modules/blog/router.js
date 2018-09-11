import PostList from './_components/PostList';
import Post from './_components/Post';

const routes = [
	{ path: '', component: PostList },
	{ path: 'post/:id', component: Post, props: true, meta: { transition: 'slide' } }
];

export default routes;