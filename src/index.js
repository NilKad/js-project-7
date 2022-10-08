import paginations from './js/paginations';
import { ApiService } from './js/api-service';
import { renderMovies } from './js/render-movies';

const refs = {
  form: document.querySelector('.hero-home__form'),
  gallery: document.querySelector('.main'),
};
const apiService = new ApiService();

async function popularMoviesGenerate() {
  const popularMovies = await apiService.fetchMoviesPopular();
  const markup = await renderMovies(popularMovies);
  refs.gallery.innerHTML = markup;
}
popularMoviesGenerate();

refs.form.addEventListener('submit', onFormSubmit);

async function onFormSubmit(event) {
  event.preventDefault();
  apiService.query = event.currentTarget.elements.searchQuery.value;
  const searchResults = await apiService.fetchMoviesSearch();
  const markup = await renderMovies(searchResults);
  refs.gallery.innerHTML = markup;
}

const currentPage = 1;
