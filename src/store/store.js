import { createStore, applyMiddleware, compose } from "redux";
// import { createLogger } from "redux-logger";
import ReduxThunk from "redux-thunk";
// eslint-disable-next-line import/no-extraneous-dependencies
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import Reducers from "../reducers/rootReducer";

export const history = createBrowserHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(a) {
  const store = createStore(
    Reducers(history),
    a,
    composeEnhancers(
      applyMiddleware(
        // createLogger(),
        ReduxThunk,
        routerMiddleware(history)
      )
      // reduxFirestore(firebaseConfig),
      // reactReduxFirebase(firebaseConfig)
    )
  );

  return store;
}
