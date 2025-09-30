//import axios from 'axios';
import { getImagesByQuery } from './js/pixabay-api';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions';

// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";



const form = document.querySelector('.form');
const input = document.querySelector('input');
let q;

const hanlderSubmit = function (event) {
    event.preventDefault();
    q = event.target.elements['search-text'].value.toLowerCase().trim();
    if (q === '') {
        alert('Fill your answer');
    } else {
        input.value = '';
        showLoader();
        clearGallery();
        setTimeout(() => { //щоб лоудер хоч побачити ;)
            getImagesByQuery(q)
            .then(res => {
                //console.log(res.data);
                hideLoader();
                if (res.data.hits.length === 0) {
                     iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                     })
                    //clearGallery();
                    
                } else {
                    createGallery(res.data.hits);
                }
               
            })
            .catch(error => {
                console.log(error);
                //clearGallery();
            })
            
        }, 2000);
        // getImagesByQuery(q)
        //     .then(res => {
        //         console.log(res.data);
        //         hideLoader();
        //         if (res.data.hits.length === 0) {
        //              iziToast.error({
        //             message: 'Sorry, there are no images matching your search query. Please try again!',
        //              })
        //             clearGallery();
                    
        //         } else {
        //             createGallery(res.data.hits);
        //         }
               
        //     })
        //     .catch(error => {
        //         console.log(error);
        //         clearGallery();
        //     })

    }
    
    
};


form.addEventListener('submit', hanlderSubmit);

