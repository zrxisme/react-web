import { createStore, applyMiddleware,compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
const middleware = [thunk,createLogger]
const configStore = compose(
    applyMiddleware(...middleware)
)(createStore)
export default configStore
