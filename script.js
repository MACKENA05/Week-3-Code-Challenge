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
    .catch(error => console.log(error));     //incase of any error it will be logged to the console
}

//generate list of  movie titles
function populateMovieList(movies) {
    filmsList.innerHTML = '';  // Clear the list before adding new items
    movies.forEach(movie => {
        const li = document.createElement('li');
        li.classList.add('film', 'item');
        li.textContent = movie.title;

        // Add click event to display the selected movie's details
        li.addEventListener('click', () => displayMovieDetails(movie));

        // Mark as sold-out if no tickets are available
        if (movie.capacity - movie.tickets_sold === 0) {
            li.classList.add('sold-out');
        }

        filmsList.appendChild(li);
    });
}
 //displaying movie details
 function displayMovieDetails(movie) {
    movieTitle.textContent = movie.title;
    moviePoster.src = movie.poster;
    movieRuntime.textContent = `Runtime: ${movie.runtime} minutes`;
    movieShowtime.textContent = `Showtime: ${movie.showtime}`;
    const available = movie.capacity - movie.tickets_sold;
    availableTickets.textContent = `Available Tickets: ${available}`;

    // Enable/Disable the "Buy Ticket" button
    if (available > 0) {
        buyTicketButton.disabled = false;
        buyTicketButton.textContent = 'Buy Ticket';
        buyTicketButton.onclick = (event) => buyTicket(movie, event);
    } else {
        buyTicketButton.disabled = true;
        buyTicketButton.textContent = 'Sold Out';
    }
}


//buying a ticket
function buyTicket(movie, event) {
    event.preventDefault(); 
    const available = movie.capacity - movie.tickets_sold;
    if (available > 0) {
        movie.tickets_sold++;  // Increase the tickets sold
        availableTickets.textContent = `Available Tickets: ${movie.capacity - movie.tickets_sold}`;

        // Update the server with the new ticket count
        updateTicketOnServer(movie);

        // Show a browser alert message after successful purchase
        alert(`You have successfully bought a ticket for "${movie.title}"! your ticket number is ${movie.title.charAt(0)}${available}`);

        // Disable the button if the movie is sold out
        if (movie.capacity - movie.tickets_sold === 0) {
            buyTicketButton.disabled = true;
            buyTicketButton.textContent = 'Sold Out';
        }
    }
}
//updating ticket count on server
function updateTicketOnServer(movie){
   fetch(`${API_URL}/${movie.id}`,{
    method:'PATCH',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify({ tickets_sold : movie.tickets_sold })
   })
   .then(response => response.json())
   .then(updatedMovie => console.log('Updated Movie:', updatedMovie))
   .catch(error => console.error('Error updating tickets:', error));
}
//initialize the app
fetchMovies();