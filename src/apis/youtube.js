import axios from 'axios'; //to getting http request
const KEY = 'AIzaSyBBfYk4zZCdkGviuvIqF7HPAb5_f5Sg76g'; 

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 7,
        key: KEY
    }
})