import React from "react";
import ReactDOM from "react-dom";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import firebase, { firebaseConfig } from "./configs/firebaseConfig";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import configureStore, { history } from "./store/store";

const store = configureStore({});

const rrfProps = {
  firebase,
  config: firebaseConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
};

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
