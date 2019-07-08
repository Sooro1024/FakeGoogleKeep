import { createStore, applyMiddleware, compose } from "redux";
// import { createLogger } from "redux-logger";
import ReduxThunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import Reducers from "../reducers/rootReducer";
import firebase, { firestore } from "../configs/firebaseConfig";

export const history = createBrowserHistory();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(a) {
  const store = createStore(
    Reducers(history),
    a,
    composeEnhancers(
      applyMiddleware(
        // createLogger(),
        ReduxThunk.withExtraArgument({ firebase, firestore }),
        routerMiddleware(history)
      )
      // reduxFirestore(firebaseConfig),
      // reactReduxFirebase(firebaseConfig)
    )
  );

  return store;
}
