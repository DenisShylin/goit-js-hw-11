export function createImageCard({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `
    <li class="gallery-item">
      <a class="gallery-link" href="${largeImageURL}">
        <img 
          class="gallery-image" 
          src="${webformatURL}" 
          alt="${tags}"
          loading="lazy"
        />
        <div class="image-info">
          <p class="info-item"><b>Likes:</b> ${likes}</p>
          <p class="info-item"><b>Views:</b> ${views}</p>
          <p class="info-item"><b>Comments:</b> ${comments}</p>
          <p class="info-item"><b>Downloads:</b> ${downloads}</p>
        </div>
      </a>
    </li>
  `;
}

export function renderGallery(images, container) {
  const markup = images.map(createImageCard).join('');
  container.innerHTML = markup;
}
