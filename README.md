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
├── api/                     # API service and configuration
│   └── omdbApi.ts           # OMDb API integration
├── components/              # Reusable UI components
│   ├── Filter/              # Search and filter components
│   ├── MovieCard/           # Movie card display component
│   ├── MovieDetails/        # Movie details component
│   ├── MovieList/           # Movie listing component
│   ├── Pagination/          # Pagination controls
│   └── Skeleton/            # Loading skeleton components
├── hooks/                   # Custom React hooks
│   └── useDebounce.ts       # Debounce hook for search input
├── pages/                   # Page components
│   ├── Home/                # Home page
│   ├── MovieDetail/         # Movie details page
│   └── NotFound/            # 404 page
├── store/                   # Redux store configuration
│   ├── slices/              # Redux slices
│   │   └── movieSlice.ts    # Movie-related state management
│   └── store.ts             # Redux store setup
├── styles/                  # Global styles
│   └── global.css           # Global CSS styles
├── types/                   # TypeScript type definitions
│   └── movie.types.ts       # Movie-related type definitions
├── utils/                   # Utility functions
│   └── helpers.ts           # Helper functions
├── App.tsx                  # Main application component
├── main.tsx                 # Application entry point
└── vite-env.d.ts            # Vite type declarations
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

5. Open [http://localhost:5173](http://localhost:5173) to view the app in your browser.

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

## Development Guidelines

### Git Configuration

It's recommended to add the following files to your `.gitignore`:

```
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/dist
/build

# misc
.DS_Store
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
```

## Technologies Used

- **React** - UI library
- **TypeScript** - Type safety
- **Redux Toolkit** - State management
- **React Router** - Navigation
- **Vite** - Build tool
- **CSS/SCSS** - Styling
- **Bootstrap** - UI components
- **React Lazy/Suspense** - Code splitting

## License

This project is licensed under the MIT License - see the LICENSE file for details.
