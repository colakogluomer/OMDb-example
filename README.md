# Movie Database Application

A modern React application built with TypeScript that allows users to search and explore movies using the OMDb API. The application features a clean, responsive interface with lazy-loaded components for optimal performance.

## Features

- **Search & Filtering**: Search for movies by title with filters for year and content type (movie, series, episode)
- **Responsive UI**: Fully responsive design that works on all devices
- **Lazy Loading**: Components are loaded on-demand for faster initial load times
- **Detailed Movie Information**: View comprehensive details about each movie including ratings, plot, cast, and more
- **Skeleton Loading**: Visual feedback during data fetching with skeleton loaders
- **Pagination**: Navigate through search results with an intuitive pagination system

## Getting Started

### Prerequisites

- Node.js (v20 or later)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/colakogluomer/OMDb-example.git
   cd OMDB-example
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

   You may skip the third one since I will not add .env file to the gitignore for the use-case purposes.

3. Create a `.env` file in the root directory with your OMDb API key:

   ```
   VITE_API_KEY=your_api_key_here
   VITE_API_BASE_URL=https://www.omdbapi.com
   ```

   You can get an API key from [OMDb API](http://www.omdbapi.com/apikey.aspx)

4. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) to view the app in your browser.

## Building for Production

To build the app for production:

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## Running with Docker

If you prefer to run the app in a Docker container, follow these steps:

1. Ensure Docker is installed on your machine.

2. Create a .env file in the root directory with the required environment variables.

3. Run the following command in the root directory:

```bash
docker-compose up
```

4. The application should now be running at http://localhost:8080

## Environment Variables

| Variable             | Description               | Default                               |
| -------------------- | ------------------------- | ------------------------------------- |
| VITE_API_KEY         | Your OMDb API key         | ffb727ec                              |
| VITE_API_BASE_URL    | Base URL for the OMDb API | https://www.omdbapi.com               |
| VITE_APP_TITLE       | App Title                 | Movie Database                        |
| VITE_APP_DESCRIPTION | App Description           | Search for movies, TV shows, and more |

## Technologies Used

- **React** - UI library
- **TypeScript** - Type safety
- **Redux Toolkit** - State management
- **React Router** - Navigation
- **Vite** - Build tool
- **CSS/SCSS** - Styling
- **Bootstrap** - UI components
- **React Lazy/Suspense** - Code splitting
