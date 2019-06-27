import { combineReducers } from 'redux'
import { mathReducer } from './reducer'
import { getData } from './getData'
import {checkLogIn} from './checkLogIn'

export const Reducers = combineReducers({mathReducer, getData, checkLogIn})