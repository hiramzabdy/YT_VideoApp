import axios from 'axios';

const baseURL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
    try {
        const data = await axios.request(`${baseURL}/${url}`, options)
        return data
    } catch (error) {
        return error
    }
}