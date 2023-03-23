import axios from 'axios';

const Base_URL='https://youtube-v31.p.rapidapi.com';
const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI = async (url) =>{
    var generateFullUrl= `${Base_URL}/${url}`
    const {data} = await axios.get(generateFullUrl, options);

    return data;
  } 