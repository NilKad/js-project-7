const main = document.querySelector('main');

export function showSpinner() {
  main.classList.add('loading');
}

export function hideSpinner() {
  main.classList.remove('loading');
}
