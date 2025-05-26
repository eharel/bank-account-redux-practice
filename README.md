# Redux Practice Project

This is a simple React project created to practice and learn **Redux**, **Redux Thunks**, and **Redux Toolkit**. The project demonstrates how to organize Redux logic, use action creators, reducers, and thunks, and structure a scalable Redux codebase.

## Features

- Basic account and customer management using Redux state
- Organized action types, action creators, and reducers
- Usage of Redux Toolkit for store setup and middleware
- Example of async logic with Redux Thunks (if implemented)
- Clean folder structure following feature-based organization

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

- `npm start`  
  Runs the app in development mode at [http://localhost:3000](http://localhost:3000).

- `npm test`  
  Launches the test runner in interactive watch mode.

- `npm run build`  
  Builds the app for production to the `build` folder.

- `npm run eject`  
  **Note:** This is a one-way operation. Once you eject, you can’t go back!

## Project Structure

```
src/
  features/
    accounts/
      state/
        actionTypes.js
        actions.js
        reducer.js
      AccountComponent.jsx
    customers/
      state/
        actionTypes.js
        actions.js
        reducer.js
      CreateCustomer.js
  store.js
```

- **actionTypes.js**: Centralized action type constants.
- **actions.js**: Action creators for dispatching actions.
- **reducer.js**: Reducer functions for handling state changes.
- **store.js**: Redux store configuration using Redux Toolkit.

## Learning Goals

- Understand Redux core concepts: actions, reducers, store, and middleware
- Learn how to use Redux Toolkit for easier Redux setup
- Practice organizing Redux code for scalability
- Explore async logic with Redux Thunks

## Resources

- [Redux Documentation](https://redux.js.org/)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org/)
- [React Redux Documentation](https://react-redux.js.org/)

---

This project is for learning and experimentation purposes only.
