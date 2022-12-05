import { API_KEY, BASE_URL, IMG_URL, language } from './api.js'

const movieImage = document.getElementById('movieImage')
const movieTitle = document.getElementById('movieTitle')
const movieSummary = document.getElementById('movieSummary')
const findMovie = document.getElementById('findMovie')
findMovie.addEventListener('click', findMovieFunc)

//https://api.themoviedb.org/3/movie/550?api_key=f6fc39d1a09cfead5379199d398c2281

function findMovieFunc() {
  let movieId = Math.floor(Math.random() * 1000 + 1)
  let url = `${BASE_URL}${movieId}?api_key=${API_KEY}&${language}`

  console.log(movieId)
  console.log(url)

  axios
    .get(url)
    .then(res => {
      const data = res.data
      console.log(data)
      movieSummary.textContent = `${data.overview}`
      movieTitle.textContent = `${data.title}`
      movieImage.src = `${IMG_URL}${data.poster_path}`
      movieImage.alt = `Imagem do filme`
    })
    .catch(error => {
      movieSummary.textContent = `Bora codar!!`
      movieTitle.textContent = `Ops, hoje não é dia de assistir filme.`
      movieImage.src = ``
      movieImage.alt = `Imagem de erro`
    })
}
