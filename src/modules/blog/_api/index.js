import axios from 'axios';
import conf from './conf.json';

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