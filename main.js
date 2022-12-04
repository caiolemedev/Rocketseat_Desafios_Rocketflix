import axios from 'axios'
import { API_KEY, BASE_URL, IMG_URL, language } from './api.js'

//const movieImage = document.getElementById('movieImage')
//const movieTitle = document.getElementById('movieTitle')
//const movieDescription = document.getElementById('movieDescription')
const movieId = Math.floor(Math.random() * 1000 + 1)

//https://api.themoviedb.org/3/movie/550?api_key=f6fc39d1a09cfead5379199d398c2281
const url = `${BASE_URL}${movieId}?api_key=${API_KEY}&${language}`

console.log(movieId)
console.log(url)

function findMovie() {
  axios
    .get(url)
    .then(response => {
      console.log(response)
    })
    .catch(error => console.log(error))
}
