/* eslint-disable no-undef */
import { createStore, applyMiddleware, compose } from 'redux'
import { thunk } from 'redux-thunk'
import reducers from './reducers/index'

const store = (initialState = {}) =>
  createStore(reducers, initialState, compose(applyMiddleware(thunk)))
export default store
