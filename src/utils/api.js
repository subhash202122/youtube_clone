import axios from "axios";
const BASE_URL="https://youtube138.p.rapidapi.com";
const options = {
    method: 'GET',
    url: process.env.REACT_APP_YOUTUBE_API_KEY,
    params: {
      q: 'desp',
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'X-RapidAPI-Key': '88085d5ef0mshd72643bad6bb123p1e0d99jsne7e13d1381fd',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };
  export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
};