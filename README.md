# Movie Database Application

A modern React application built with TypeScript that allows users to search and explore movies using the OMDb API. The application features a clean, responsive interface with lazy-loaded components for optimal performance.

## Features

- **Search & Filtering**: Search for movies by title with filters for year and content type (movie, series, episode)
- **Responsive UI**: Fully responsive design that works on all devices
- **Lazy Loading**: Components are loaded on-demand for faster initial load times
- **Detailed Movie Information**: View comprehensive details about each movie including ratings, plot, cast, and more
- **Skeleton Loading**: Visual feedback during data fetching with skeleton loaders
- **Pagination**: Navigate through search results with an intuitive pagination system

## Project Structure

```
src/
├── App.scss                  # Main application styles
├── App.tsx                   # Main application component with routing
├── pages/                    # Page components organized by feature
│   └── movies/               # Movie-related pages and components
│       ├── Movies.module.scss # Movie-specific styles
│       ├── MovieList.tsx     # Movie listing page
│       ├── MovieDetails.tsx  # Movie details page (lazy loaded)
│       └── components/       # Movie-specific components
│           ├── Filter.tsx    # Search and filter component
│           ├── MoviePlaceholder.tsx # Placeholder for missing movie posters
│           ├── MovieTable.tsx # Table display for movie results
│           ├── Pagination.tsx # Pagination component
│           └── ScrollToTop.tsx # Utility for scrolling to top
├── shared/                   # Shared utilities and components
│   └── NotFound.tsx          # 404 page (lazy loaded)
└── ...                       # Other app files (store, hooks, etc.)
```

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/movie-database.git
   cd movie-database
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

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

5. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Building for Production

To build the app for production:

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist` directory.

## Environment Variables

| Variable          | Description               | Default                 |
| ----------------- | ------------------------- | ----------------------- |
| VITE_API_KEY      | Your OMDb API key         | -                       |
| VITE_API_BASE_URL | Base URL for the OMDb API | https://www.omdbapi.com |

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Redux Toolkit** - State management
- **React Router** - Navigation
- **Vite** - Build tool
- **SCSS Modules** - Styling
- **Bootstrap** - UI components
- **React Lazy/Suspense** - Code splitting

## License

This project is licensed under the MIT License - see the LICENSE file for details.
