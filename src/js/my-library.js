import { createMovieCards } from './moviesMarkup';
// import { onMovieCardClick } from './moviesGallery';
import { modalBasicLightbox } from './modalBasicLightbox';
import { localStorageAPI } from './localStorageAPI';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import nothingHereIMG from '../img/thereNothingHere.jpg';

const moviesContainer = document.querySelector('.movies');
const watchedBtnEl = document.querySelector('[data-id="watched-btn"');
const queueBtnEl = document.querySelector('[data-id="queue-btn"');
const myLibraryNavEl = document.querySelector('.header-nav__link--current-header');
const localStorageApi = new localStorageAPI();

watchedBtnEl.addEventListener('click', onWatchedBtnClick);
queueBtnEl.addEventListener('click', onQueueBtnClick);
// myLibraryNavEl.addEventListener('click', renderCardsWatched);

// Заглушка, когда пусто в MyLibrary
const DefaultMarcup = `<li class="default-img"><img src="${nothingHereIMG}" 
  alt="nothing-here" width="400px"></img></li>`;

function renderCardsWatched() {
  const getWatched = localStorageApi.getData('watched');
  let markup = '';

  if (getWatched === null || getWatched.length === 0) {
    markup = DefaultMarcup;
  } else {
    markup = createMovieCards(getWatched);
  }
  moviesContainer.innerHTML = markup;
  moviesContainer.addEventListener('click', onWatchedMovieCardClick);
}

renderCardsWatched();

function onWatchedBtnClick() {
  let markup = '';
  moviesContainer.removeEventListener('click', onQueueMovieCardClick);

  if (watchedBtnEl.classList.contains('is-active')) {
    return;
  }
  const getWatched = localStorageApi.getData('watched');
  if (getWatched === null || getWatched.length === 0) {
    markup = DefaultMarcup;
  } else {
    markup = createMovieCards(getWatched);
  }
  moviesContainer.innerHTML = markup;
  moviesContainer.addEventListener('click', onWatchedMovieCardClick);
}

function onQueueBtnClick() {
  let markup = '';
  moviesContainer.removeEventListener('click', onWatchedMovieCardClick);

  if (!watchedBtnEl.classList.contains('is-active')) {
    return;
  }
  const getQueue = localStorageApi.getData('queue');
  if (getQueue === null || getQueue.length === 0) {
    markup = DefaultMarcup;
  } else {
    markup = createMovieCards(getQueue);
  }
  moviesContainer.innerHTML = markup;
  moviesContainer.addEventListener('click', onQueueMovieCardClick);
}

function onWatchedMovieCardClick(e) {
  const targetFilm = e.target.closest('li').dataset.id;
  if (e.target.nodeName === 'UL') {
    return;
  }

  try {
    const movies = localStorageApi.getData('watched');
    const parsedGenres = localStorageApi.getData('genresList');
    const film = movies.filter(({ id }) => id === Number(targetFilm))[0];
    const { genre_ids } = film;
    let genres;
    if (genre_ids) {
      genres = parsedGenres.filter(({ id }) => genre_ids.includes(id)).map(({ name }) => name);
    }
    film.genres = genres;

    localStorageApi.setData('current-film', film);

    modalBasicLightbox(film, 'watched');
    localStorageApi.addListenersToBtns();
  } catch (error) {
    console.log(error.message);
  }
}

function onQueueMovieCardClick(e) {
  const targetFilm = e.target.closest('li').dataset.id;
  if (e.target.nodeName === 'UL') {
    return;
  }

  try {
    const movies = localStorageApi.getData('queue');
    const parsedGenres = localStorageApi.getData('genresList');
    const film = movies.filter(({ id }) => id === Number(targetFilm))[0];
    const { genre_ids } = film;
    let genres;
    if (genre_ids) {
      genres = parsedGenres.filter(({ id }) => genre_ids.includes(id)).map(({ name }) => name);
    }
    film.genres = genres;

    localStorageApi.setData('current-film', film);

    modalBasicLightbox(film, 'queue');
    localStorageApi.addListenersToBtns();
  } catch (error) {
    console.log(error.message);
  }
}
