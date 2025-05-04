
# GlobeSeeker - Country Finder App

GlobeSeeker is a web application designed to help users discover information about countries around the world. This app provides detailed country data, such as names, populations, currencies, and borders, by fetching data from the Rest Countries API. The app utilizes React, Vite.js, Redux, and Open Maps for a seamless and responsive user experience.

### Live Demo: [GlobeSeeker on Netlify](https://globe-seeker.netlify.app/)

## Features

- **Country Search**: Search for a country by name, capital, or region.
- **Country Details**: View detailed information such as population, region, subregion, capital, languages, currencies, and borders.
- **Interactive Map**: View the country location on Open Maps.
- **State Management**: Global state management using Redux for efficient data handling.
- **Responsive Design**: Optimized for both mobile and desktop views.

## Technologies Used

- **Frontend**: React.js (with hooks)
- **State Management**: Redux Toolkit
- **Bundler**: Vite.js
- **Maps**: OpenStreetMap (using Leaflet.js)
- **API**: Rest Countries API

## Getting Started

To get the project up and running locally, follow the steps below:

### Prerequisites

Make sure you have the following installed:

- **Node.js**: [Download Node.js](https://nodejs.org/)
- **npm**: Comes with Node.js

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/shachiruRashmika2/globe-seeker.git
   cd globeseeker
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## Folder Structure

```bash
/src
  /assets        # Static assets like images, icons, etc.
  /components    # Reusable React components
  /pages         # Different pages of the app
  /redux         # Redux slice and store
  /styles        # CSS files or styled components
  /utils         # Utility functions for API calls, etc.
```

## Features in Detail

### Country Search

- Users can search for a country by typing its name, capital, or region in the search bar.
- The search results are fetched from the **Rest Countries API** and displayed in a list.

### Country Details

- Once a country is selected, users can see detailed information about the country, including:
  - Population
  - Region & Subregion
  - Languages and Currencies
  - Area
  - Car Sides

### Interactive Map

- Each country's location is displayed on an interactive map using **OpenStreetMap** integrated with **Leaflet.js**.
- The map can zoom in and out to provide a better view of the country.

### Redux for State Management

- The global state is managed using **Redux Toolkit**, allowing efficient handling of the app's state across components.
- Actions and reducers are used to handle asynchronous API calls and store the country data.

## API Usage

The app uses the **Rest Countries API** to fetch country data. Here are the main endpoints used:

- **Search for countries**:  
  `https://restcountries.com/v3.1/name/{country}`  
  Example: `https://restcountries.com/v3.1/name/usa`

- **Get details of a country by its code**:  
  `https://restcountries.com/v3.1/alpha/{code}`  
  Example: `https://restcountries.com/v3.1/alpha/US`


## License



## Acknowledgments

- **Rest Countries API**: For providing the country data.
- **Vecteezy**: For providing the Images.
- **OpenStreetMap**: For the interactive map.
- **Material UI**: For the Css Styling.
- **React**: For building the user interface.
- **Vite.js**: For bundling the app with fast build times.
- **Redux Toolkit**: For state management.
