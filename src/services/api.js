import axios from 'axios';

const API_URL = 'https://rickandmortyapi.com/api';

export default {
  getCharacters(page = 1) {
    return axios.get(`${API_URL}/character?page=${page}`);
  },
  getCharacter(id) {
    return axios.get(`${API_URL}/character/${id}`);
  },
  getCharacterByUrl(url) {
    return axios.get(url);
  },
  getEpisodes(page = 1) {
    return axios.get(`${API_URL}/episode?page=${page}`);
  },
  getEpisode(id) {
    return axios.get(`${API_URL}/episode/${id}`);
  },
  getLocations(page = 1) {
    return axios.get(`${API_URL}/location?page=${page}`);
  },
  getLocation(id) {
    return axios.get(`${API_URL}/location/${id}`);
  }
};
