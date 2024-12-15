const API_URL = "http://localhost:3000/films";
//creating our DOM elements
const movieTitle = document.getElementById('movie-title');
const moviePoster = document.getElementById('movie-poster');
const movieRuntime = document.getElementById('movie-runtime');
const movieShowtime = document.getElementById('movie-showtime')
const availableTickets = document.getElementById('available-tickets')
const buyTicketButton = document.getElementById('buy-ticket-button')
const filmsList = document.getElementById('films')

//fetching movie data from the server
function fetchMovies(){
    fetch(API_URL)
    .then(response => response.json())
    .then(movies => {
        populateMovieList(movies);
        displayMovieDetails(movies[0]);
    })
    .catch(error => console.log(error))     //incase of any error it will be logged to the console
}

//generate movie titles
function populateMovieList(movies){
    filmsList.innerHTML = ''                //clears the list before adding new items
    movies.forEach(movie =>{
        const li = document.createElement('li');
        li.classList.add('film','item')                       //adding class to the li element
        li.textContent = movie.title
        //adding click event to display the selected movies detail
    li.addEventListener('click',() => displayMovieDetails(movie))
    //mark as sold if no tickets ara not available
    if(movie.capacity-movie.ticket_sold === 0){
        li.classList.add('sold out')
    }
    filmsList.append(li);
});
};