import { fetchTrendingMovies } from './fetchAPI';
import { createMovieCards } from './moviesMarkup';
import { paginationOptions } from './pagination-options';
// import './pagination-options';
import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const moviesContainer = document.querySelector('.movies');

const getPaginationsOption = totalResults => paginationOptions;
/**
 * Function fetch trending movies and make markup on page
 */
async function trendingMovies() {
  // try {
  const res = await fetchTrendingMovies();
  moviesContainer.innerHTML = createMovieCards(res.results);

  // console.log('res: ', res);
  // let returnPaginationOption = null;
  console.log(typeof paginationOptions(res.total_results)); //.then(e => (returnPaginationOption = e));
  // console.log(returnPaginationOption);

  const pagination = new Pagination('pagination', paginationOptions(res.total_results));

  pagination.on('afterMove', ({ page }) => {
    fetchTrendingMovies(page).then(res => {
      moviesContainer.innerHTML = createMovieCards(res.results);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
  // } catch (error) {
  //   console.log('error', error.message);
  // }
}
trendingMovies();
