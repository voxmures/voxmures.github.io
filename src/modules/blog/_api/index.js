import axios from 'axios';
import conf from './conf.json';

if (conf.token)
	axios.defaults.headers.common['Authorization'] = `token ${conf.token}`;

const fetchPosts = () => {
    return axios.get(`https://api.github.com/repos/${conf.repo}/contents/`)
        .then(res => res.data);
};

const fetchPost = (sha) => {
    return axios.get(`https://api.github.com/repos/${conf.repo}/git/blobs/${sha}`)
        .then(res => res.data);
};

export default {
    fetchPosts,
    fetchPost
};