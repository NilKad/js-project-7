export async function renderMovies(movies) {
  return movies
    .map(
      ({
        title,
        name,
        release_date,
        first_air_date,
        vote_average,
        genre_ids,
        poster_path,
      }) => {
        const allGenresList = JSON.parse(localStorage.getItem('genres-list'));
        const genresFiltered = allGenresList
          .filter(({ id }) => genre_ids.includes(id))
          .map(({ name }) => name);

        return `<div class="movie__card">
          <img class="movie__img" src="https://image.tmdb.org/t/p/original${poster_path}" alt="${title}" loading="lazy"/>
          <div class="movie__info">
            <p class="movie__title">
              ${title || name}</p>
            <p class="movie__descr">
              ${genresFiltered.join(', ')}</p>
            <p class="movie__descr">
              ${(release_date || first_air_date || '-').slice(0, 4)}</p>
            <p class="movie__rating">
              ${vote_average.toFixed(1) || '-'}</p>
          </div>
        </div>`;
      }
    )
    .join('');
}
