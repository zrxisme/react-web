import { createStore, applyMiddleware,compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import promiseMiddleware from 'redux-promise'
const middleware = [promiseMiddleware,thunk,createLogger]
const configStore = compose(
    applyMiddleware(...middleware)
)(createStore)
export default configStore
