import axios from 'axios';
import conf from './conf.json';

export default {
    fetchPosts: () => {
        return axios.get(`https://api.github.com/repos/${conf.repo}/contents/`)
            .then(res => res.data)
            .then(data => data.map(post => ({
                id: post.sha,
                title: post.name.replace(/\.md$/, '').slice(post.name.lastIndexOf('-') + 1),
                date: post.name.slice(0, post.name.lastIndexOf('-'))
            })));
    },
    getPost: (sha) => {
        return axios.get(`https://api.github.com/repos/${conf.repo}/git/blobs/${sha}`)
            .then(res => res.data);
    }
};