import axios from 'axios';
const KEY= 'AIzaSyDqAG4fjPmvbst_DpecbEGFMAhSZf_bfDc';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})

