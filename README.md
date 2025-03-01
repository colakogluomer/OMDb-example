# Movie Database Application

A React application that allows users to search and view details about movies using the OMDb API.

## Features

- Search for movies, TV series, and episodes
- Filter by year and content type
- Pagination with 10 items per page
- Detailed view for each movie/show
- Responsive design

## Prerequisites

- Node.js (v14 or later)
- npm or yarn

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/movie-database.git
   cd movie-database
   ```

2. Install dependencies:

   ```
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory and add your OMDb API key:

   ```
   REACT_APP_OMDB_API_KEY=your_api_key_here
   ```

   You can get an API key from [OMDb API](http://www.omdbapi.com/apikey.aspx)

4. Start the development server:

   ```
   npm start
   # or
   yarn start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Building for Production

To build the app for production:

```sh
npm run build
# or
yarn build
```

## Environment Setup

This project uses environment variables for configuration. Follow these steps to set up your environment:

1. Copy the `.env.example` file to a new file named `.env`:

   ```bash
   cp .env.example .env
   ```

2. Edit the `.env` file and replace the placeholder values with your actual API keys and configuration.

3. For development, run the app with:

   ```bash
   npm run dev
   ```

4. For Docker deployment:
   ```bash
   docker-compose up -d
   ```

### Environment Variables

| Variable             | Description               | Default                               |
| -------------------- | ------------------------- | ------------------------------------- |
| VITE_API_KEY         | Your OMDb API key         | -                                     |
| VITE_API_BASE_URL    | Base URL for the OMDb API | https://www.omdbapi.com               |
| VITE_API_POSTER_URL  | URL for movie posters     | https://img.omdbapi.com               |
| VITE_APP_TITLE       | Application title         | Movie Database                        |
| VITE_APP_DESCRIPTION | Application description   | Search for movies, TV shows, and more |
