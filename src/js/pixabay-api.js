import axios from 'axios';


export function getImagesByQuery(query) {

    const API_key = '52541009-8475ad66b76bd384e4dad34fd';


    const param = new URLSearchParams({
        key: API_key,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true'
    });

    return axios.get(`https://pixabay.com/api/?${param}`)
        .then(res => {
             return res.data.hits;
               })
        .catch(error => {
                throw error;
               
        })
        
    
}

