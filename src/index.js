import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ConnectedRouter } from 'connected-react-router';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
// import firebase from 'firebase/app';
import { firebaseConfig } from './configs/firebaseConfig';
import firebase from './configs/firebaseConfig';
import { createFirestoreInstance } from 'redux-firestore';
import configureStore, { history } from './store/store';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';

const store = configureStore(/* provide initial state if any */);

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
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
