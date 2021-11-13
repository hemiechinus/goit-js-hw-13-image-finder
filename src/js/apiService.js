const BASE_URL = 'https://pixabay.com/api'
const Key = 'key=24313897-08fadb9fd8bbd27a38b998116'
const page = 1
const query = ''

fetch(`${BASE_URL}api/?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&${Key}`)
    .then(response => response.json)
    .then(data => console.log(data))
