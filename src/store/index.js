import React from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import index from '../reducer'

const reducer = combineReducers({index})
const Store = createStore(reducer, applyMiddleware(thunk))
export default Store
