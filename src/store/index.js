import { createStore, applyMiddleware } from 'redux'   
import ReduxThunk from 'redux-thunk'
import { logger } from 'redux-logger'
import { allReducers } from '../reducers';
export const store = createStore(allReducers, {}, applyMiddleware(ReduxThunk(), logger() ))