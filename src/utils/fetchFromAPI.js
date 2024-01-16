import axios from 'axios'

// require('dotenv').config();
// console.log('process: ', process.env)

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    // 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Key': 'f4004cd214msh8069b6c6716fde7p1f40c3jsne6d8abddfee0',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

// console.log('key: ', `${process.env.REACT_APP_RAPID_API_KEY}`)

export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
}