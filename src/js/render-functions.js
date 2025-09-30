import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';


export function createGallery(images) {

    const list = document.querySelector('.gallery');
    
    const imagesElements = images.map(({ webformatURL, largeImageURL, tags, views, likes, comments, downloads }) => {
        return `<li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
           <img
              class="gallery-image"
              src="${webformatURL}"
              alt="${tags}"
            />
        </a>
        <table class="gallery-item-desc">
         <tr>
          <th>Likes</th>
          <th>Views</th>
          <th>Comments</th>
          <th>Downloads</th>
         </tr>
         <tr>
          <td>${likes}</td>
          <td>${views}</td>
          <td>${comments}</td>
          <td>${downloads}</td>
         </tr>
        </table>
       </li>`;
    }).join('');

    list.innerHTML = imagesElements;

    
        let gallery = new SimpleLightbox('.gallery a', {
            captions: true,
            captionsData: 'alt',
            captionPosition: 'bottom',
            captionDelay: 250,
        });

        gallery.on('show.simplelightbox', function (event) {
            console.log(`opened image : ${event.target.querySelector('img').alt} :) `);
        });
    
        gallery.refresh();
    

   


}

export function clearGallery() {
    const list = document.querySelector('.gallery');
    
    list.innerHTML = '';

}

export function showLoader() {
    const loader = document.querySelector('.loader');
    
    loader.classList.remove('hidden');
}

export function hideLoader() {
    const loader = document.querySelector('.loader');
    
    loader.classList.add('hidden');
}