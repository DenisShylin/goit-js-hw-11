import { searchImages } from './js/pixabay-api.js';
import { renderGallery } from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.querySelector('.search-form');
  const gallery = document.querySelector('.gallery');
  const loader = document.querySelector('.loader');

  // Initialize SimpleLightbox
  let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });

  searchForm.addEventListener('submit', async e => {
    e.preventDefault();
    const searchQuery = e.target.elements.searchQuery.value.trim();

    if (!searchQuery) {
      iziToast.error({
        title: 'Error',
        message: 'Please enter a search query',
        position: 'topRight',
      });
      return;
    }

    try {
      // Show loader
      loader.style.display = 'flex';

      // Clear previous results
      gallery.innerHTML = '';

      const data = await searchImages(searchQuery);

      if (data.hits.length === 0) {
        iziToast.info({
          title: 'Info',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }

      renderGallery(data.hits, gallery);
      lightbox.refresh();
    } catch (error) {
      iziToast.error({
        title: 'Error',
        message:
          'An error occurred while fetching images. Please try again later.',
        position: 'topRight',
      });
    } finally {
      // Hide loader
      loader.style.display = 'none';
      searchForm.reset();
    }
  });
});
