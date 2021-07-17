import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux';
// import rootReducer from './reducers';
import { Provider } from 'react-redux';
// import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
// import { createFirestoreInstance } from 'redux-firestore';
// import firebase from "./firebase";
// import 'firebase/auth';
import thunkMiddleware from 'redux-thunk';
import middlewareLogger from './middleware/middleware-logger';
import restaurantsReducer from './reducers/restaurants-reducer';
// import SeedData from './components/SeedData';

const store = createStore(restaurantsReducer, applyMiddleware(thunkMiddleware, middlewareLogger))

// const rrfProps = {
//   firebase,
//   config: {
//     userProfile: "users",
//     useFirestoreForProfile: true
//   },
//   dispatch: store.dispatch,
//   createFirestoreInstance
// }

ReactDOM.render(
  <Provider store={store}>
    {/* <ReactReduxFirebaseProvider {...rrfProps}> */}
    <App />
    {/* </ReactReduxFirebaseProvider> */}
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
