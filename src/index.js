import './sass/main.scss';
import apiService from './js/apiService.js'
import template from './template/template.hbs'
import debounce from 'debounce'

const form = document.querySelector('.form-box');
const gallery = document.querySelector('.gallery-list')
const btn = document.querySelector('.btn')
const element = document.querySelector('.gallery-box');

markupForm()
const input = document.querySelector('[name="query"]')
input.addEventListener('input', debounce(searchImages, 1000))
btn.addEventListener('click', loadMoreImage)

const newApiService = new apiService()
btn.classList.add('visibility')

function searchImages(evt) {
    evt.preventDefault()
   gallery.innerHTML = ""
   newApiService.page = 1
    
    newApiService.query = evt.target.value.trim()
    newApiService.makeFetch().then(data => {
        if (data.total !== 0) {
            data.hits.map((elem) => {
                const markup = template({ elem })
                gallery.insertAdjacentHTML('beforeend', markup)
                btn.classList.remove('visibility')
                // evt.target.value = ""
                
            })
        }
        else {
           btn.classList.add('visibility')
           alert('Введіть коректне значення!')
        }
    })
    .catch(error => console.log(error))
}
function loadMoreImage() {
    changePage()
    newApiService.makeFetch().then(data => {
        data.hits.map((elem) => {
    const markup = template({ elem })
            gallery.insertAdjacentHTML('beforeend', markup)
        })
        scroll()
    })
}

function scroll() {
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve(element.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
}))
    }, 400)
})
    return promise
}

function changePage() {
    newApiService.page += 1
}

function markupForm() {
    const markup = `<form class="search-form" id="search-form">
    <input class= "input" type="text" name="query" autocomplete="off" placeholder="Search images..." />
    </form>`
    
    form.insertAdjacentHTML('beforeend', markup)
}

