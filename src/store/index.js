import configStore from './configStore'
import reducers from '../reducers'
const store = configStore(reducers)
export default store