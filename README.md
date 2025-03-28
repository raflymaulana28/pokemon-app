
# Pokémon List App

This application is built using **React**, **Vite**, and **TypeScript** to display a list of Pokémon fetched from the **Pokémon API**. It shows the Pokémon's name and image.

## Features:
- Displays a list of Pokémon fetched from the Pokémon API.
- Uses **Vite** for fast development.
- Built with **TypeScript** for strong typing.
- Efficient build and deployment process.

## Technologies Used:
- **React**: JavaScript library for building user interfaces.
- **Vite**: A fast build tool for modern frontend development.
- **TypeScript**: A superset of JavaScript that adds static types.
- **Pokémon API**: Public API used to fetch Pokémon data.
- **Redux**: A predictable state container for JavaScript apps.

## Installation and Setup

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/raflymaulana28/pokemon-app.git
cd pokemon-app
```

### 2. Install Dependencies

Ensure that you have the latest version of **Node.js** installed. Then, install all required dependencies using either npm or yarn:

```bash
npm install
# or
yarn install
```

### 3. Configuration and Setup

No API configuration is required, as this application uses the public Pokémon API that can be accessed without authentication.

## Running the Application

After installing the dependencies, you can run the application using the following commands:

### 1. Run the Application in Development Mode

To start the application in development mode, run:

```bash
npm run dev
# or
yarn dev
```

The app will be available at `http://localhost:5173`. You can open this URL in your browser to see the Pokémon list fetched from the API.

### 2. Build the Application for Production

To build the application for production, run:

```bash
npm run build
# or
yarn build
```

This will create a `dist` folder containing the static build of the application. You can serve this build with a static server or deploy it to hosting services like **Netlify**, **Vercel**, or **GitHub Pages**.

### 3. Preview the Production Build

To preview the production build locally before deploying, run:

```bash
npm run preview
# or
yarn preview
```

This will serve the production build locally at `http://localhost:4173`.

## Project Structure

Here’s a basic outline of the project structure:

```
/pokemon-list-app
│
├── /public             # Static files included in the build
│
├── /src                # Application source code
│   ├── /assets         # Images and other media files
│   ├── /components     # React components
│   ├── /reducers       # Redux store, reducers, and actions
│   ├── /containers     # Pages for the app
│   ├── /services       # API service functions
│   ├── App.tsx         # Main App component
│   ├── index.tsx       # React entry point
│
│
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
├── package.json        # Dependencies and npm scripts
└── README.md           # Project documentation
```

## Pokémon API Usage

This application uses the **Pokémon API** (https://pokeapi.co/) to fetch data about Pokémon. The API provides information about Pokémon, including their names and images.

- **Pokémon API Endpoints**: 
  - Endpoint URL: `https://pokeapi.co/api/v2/pokemon`
  - Data is fetched using `fetch` or `axios`.

## Example API Usage:

This is how the app fetches Pokémon data from the API in the `src/services/api.ts` file:

```typescript
import axios from 'axios';

const fetchPokemonList = async (limit: number = 10, offset: number = 0) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    return response.data.results;
  } catch (error) {
    console.error("Error fetching Pokémon data:", error);
    throw error;
  }
};

export { fetchPokemonList };
```

## Future Improvements

- **Pagination**: Add pagination to handle a larger list of Pokémon dynamically.

## Contributing

If you would like to contribute to this project, feel free to fork the repository, make changes, and submit a pull request. We’ll be happy to review your changes!

### Steps to Contribute:

1. Fork this repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m 'Add new feature'`).
4. Push to your branch (`git push origin feature/your-feature`).
5. Create a pull request for review.

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.
