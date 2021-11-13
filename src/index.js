import './js/apiService.js';

const form = document.querySelector('.form-box');
const markupForm = `<form class="search-form" id="search-form">
<input type="text" name="query" autocomplete="off" placeholder="Search images..." />
</form>`
form.insertAdjacentHTML('beforeend', markupForm)
const input = document.querySelector('[name="query"]')
