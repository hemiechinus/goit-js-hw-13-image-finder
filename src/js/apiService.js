export default class apiService {
    constructor() {
        this.BASE_URL = "https://pixabay.com/";
        this.KEY = '&key=24313897-08fadb9fd8bbd27a38b998116'
        this.searchQuery = "";
        this.page = 1;
    }
     makeFetch() {
    return fetch(`${this.BASE_URL}api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&${this.KEY}`)
        .then(response => {
        if (response.status === 200) {
        
          return response.json()
                }
        else {
         throw new Error (response.statusText)
        }
    })
    }
    
    get query() {
        this.searchQuery
    }
    set query(newQuery) {
        this.searchQuery = newQuery
    }
}




