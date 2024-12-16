# FlatDango Movie Theater Booking
Welcome to FlatDango—a dynamic movie theater booking system where you can browse available movies and buy tickets for your favorite films. This app fetches movie data from a server, displays detailed movie information, and allows users to purchase tickets.

## Table of Contents
1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Folder Structure](#folder-structure)
7. [API Endpoint](#api-endpoint)
8. [Contributing](#contributing)
9. [License](#license)
10. [Contacts](#contacts)

## Project Overview

**FlatDango Movie Theater Booking** allows users to:
1. View a list of available movies.
2. Search for movies by title.
3. See details about each movie, including runtime, showtime, and available tickets.
4. Purchase tickets (with real-time availability updates).

The movie data is fetched from a server, and when a user buys a ticket, the server is updated to reflect the change in ticket availability.

## Features

- **Browse Movies**: View a list of available movies.
- **Search for Movies**: Use a search input to find movies by title.
- **Movie Details**: See detailed information such as runtime, showtime, available tickets, and a poster image.
- **Buy Tickets**: Purchase tickets for available movies (ticket count is updated in real time).
- **Sold Out Notifications**: Movies that have no available tickets will show a "Sold Out" message.
- **Showtime Information**: Movies now display their showtime in addition to the title and ticket availability.

## Technologies Used

- **HTML5** for structuring the web page.
- **CSS** for styling the page (in `style.css`).
- **JavaScript** for DOM manipulation, fetching data, and handling user interactions.
- **Fetch API** for making requests to the backend server.
- **Local server** (to be running locally on `http://localhost:3000/films`) to store and manage movie data.

## Installation

### 1. Clone the Repository
Clone the project repository to your local machine:

```bash
git clone https://github.com/your-username/flatdango-movie-theater.git
```

### 2. Install Dependencies
If you're setting up a local server to serve the movie data, ensure that your backend (e.g., a Node.js server) is running at `http://localhost:3000/films` and returns movie data in the specified format.

### 3. Start the Server
Ensure that your server is running. You can use the following command based on your server's setup:
```bash
 json-server --watch db.json
```
 - Ensure the server is serving movie data at `http://localhost:3000/films`.
 - Ensure the server is always running 

 ### 4. Open the App
Open the index.html file in your browser to start using the app:
```bash
open index.html
```
## Usage
- Browse Movies: After the page loads, you'll see a list of available movies in the movie list section.
- View Movie Details: Click on any movie title in the list to see more details (e.g., runtime, showtime, available tickets).
- Buy Tickets: If tickets are available, you can click the "Buy Ticket" button. After purchase, your available tickets will be updated in real time.
- Sold Out: If there are no available tickets for a movie, the "Buy Ticket" button will be disabled, and the movie will be marked as "Sold Out."

## Folder Structure
```bash
/flatdango-movie-theater
|-- index.html         # Main HTML file
|-- style.css          # Styling for the website
|-- script.js          # JavaScript functionality (fetch, display, buy tickets)
|-- /images            # Image assets (icons, movie posters, etc.)
|-- /db.json           # Simulate and store movie data
|-- README.md          # Project documentation (this file)
```
## HTML Structure
- The index.html file includes the basic structure of the app, which includes the movie list, movie details container, and footer with contact information.
- It links to an external style.css file for styling and a script.js file for JavaScript logic.

## JavaScript Structure
1. The main functionality resides in script.js, which:
  - Fetches movie data from the backend.
  - Populates the movie list.
  - Displays movie details when a user selects a movie.
  - Handles ticket purchasing and updates both the UI and server with new ticket information.

## API Endpoint
The app interacts with the following  API:

1. **GET /films**
- Description: Returns an array of movies with their details (title, runtime, showtime, capacity, tickets sold, description, poster).
- Example Response:
````json
[
  {
    "id": "1",
    "title": "The Giant Gila Monster",
    "runtime": "108",
    "capacity": 30,
    "showtime": "04:00PM",
    "tickets_sold": 22,
    "description": "A giant lizard terrorizes a rural Texas community...",
    "poster": "https://example.com/poster.jpg"
  },
  ...
]
````
2. **PATCH /films/{id}**
- Description: Updates the tickets_sold count for a given movie based on its id.
- Example Request:
````json
{
  "tickets_sold": 23
}
````
- uccess Response: The updated movie data is returned.

## Contributing
If you'd like to contribute to this project, feel free to fork the repository, create a new branch, and submit a pull request with your improvements or bug fixes.

### Steps to Contribute:
- Fork the repository.
- Create a feature branch `(git checkout -b feature-name)`.
- Commit your changes `(git commit -m 'Add new feature')`.
- Push to the branch `(git push origin feature-name)`.
- Create a new Pull Request.

## License
This project is licensed under the MIT License 

## Contacts

If you have any questions or suggestions, feel free to reach out:

- Email: mackenamuthui@gmail.com
- Phone: +254703886506
