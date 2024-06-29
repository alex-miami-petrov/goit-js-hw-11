import iziToast from 'izitoast';
import { fetchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', async function (event) {
  event.preventDefault();

  const searchTerm = searchInput.value.trim();

  if (searchTerm === '') {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search term',
      position: 'topRight',
    });
    return;
  }

  try {
    const images = await fetchImages(searchTerm);
    renderImages(images);
  } catch (error) {
    console.error('Error searching images:', error);
    iziToast.error({
      title: 'Error',
      message: 'Failed to search images. Please try again later.',
      position: 'topRight',
    });
  }
});
