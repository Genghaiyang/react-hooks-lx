import React from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import index from '../reducer'
import query from '../reducer/query'

const reducer = combineReducers({index,query})
const Store = createStore(reducer, applyMiddleware(thunk))
export default Store
