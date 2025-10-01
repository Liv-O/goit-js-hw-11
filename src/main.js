
import { getImagesByQuery } from './js/pixabay-api';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions';


import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";



const form = document.querySelector('.form');
const input = document.querySelector('input');
let q;

const hanlderSubmit = function (event) {
    event.preventDefault();
    q = event.target.elements['search-text'].value.toLowerCase().trim();
    if (q === '') {
        iziToast.error({
            message: 'Fill your answer',
        });
    } else {
        input.value = '';
        showLoader();
        clearGallery();
        getImagesByQuery(q)
                .then(data => {
                    if (data.length === 0) {
                        iziToast.error({
                            message: 'Sorry, there are no images matching your search query. Please try again!',
                        });
                    
                        } else {
                          createGallery(data);
                        }
               })
                .catch(error => {
                    iziToast.error({
                        message: `Sorry, ${error}`,
                    });
               
               })
                .finally(() => {
                hideLoader();
               })
    }
        
};


form.addEventListener('submit', hanlderSubmit);

