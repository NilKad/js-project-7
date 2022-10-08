import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = '724fbc146559c3ae1940072aea85abed';

export class ApiService {
  constructor() {
    this.searchQuery = '';
  }

  async fetchGenresList() {
    const {
      data: { genres },
    } = await axios.get(`${BASE_URL}//genre/movie/list?api_key=${KEY}`);
    console.log(genres);
    localStorage.setItem('genres-list', JSON.stringify(genres));
  }

  async fetchMoviesPopular() {
    const {
      data: { results },
    } = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${KEY}`);
    this.fetchGenresList();

    return results;
  }

  async fetchMoviesSearch() {
    const params = {
      api_key: KEY,
      language: 'en-US',
      query: this.searchQuery,
      include_adult: false,
    };
    const {
      data: { results },
    } = await axios.get(`${BASE_URL}/search/movie/`, { params });
    console.log(results);
    return results;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
