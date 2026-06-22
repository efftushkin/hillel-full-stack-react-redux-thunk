# Coffee Recipe Browser

A training React.js project completed as part of a React.js course. The application allows users to browse hot and iced coffee recipes using data from a public API.

## About the Project

This project demonstrates building a React SPA with routing, asynchronous API requests, and centralized state management using Redux Toolkit.

Main features:

- browsing coffee categories: `hot` and `iced`;
- loading a list of drinks from a public API;
- viewing detailed information about a selected recipe;
- automatic redirect to the first recipe in a category;
- handling loading and error states.

## Technologies

- React.js
- Vite
- React Router
- Redux Toolkit
- React Redux
- `createAsyncThunk`
- ESLint

## API

Data is loaded from the public API:

```text
https://api.sampleapis.com/coffee
```

The following API routes are used:

```text
/coffee/hot
/coffee/iced
```

## Getting Started

Install dependencies:

```bash
npm install
```

Run the project in development mode:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Run the linter:

```bash
npm run lint
```

## Project Structure

```text
src/
  components/
    CoffeeLayout.jsx
    CoffeeList.jsx
    CoffeeRecipe.jsx
    Home.jsx
  store/
    coffeeSlice.js
    store.js
  App.jsx
  main.jsx
```

## Redux

Asynchronous data loading is implemented with `createAsyncThunk`. Each coffee category has its own state:

- `drinks` - the list of recipes;
- `status` - `idle`, `loading`, `succeeded`, or `failed`;
- `error` - the error message if the request fails.

Components read data with `useSelector`, and asynchronous actions are dispatched with `useDispatch`.

## 👨‍💻 Author

Built as part of Hillel Full Stack React course
