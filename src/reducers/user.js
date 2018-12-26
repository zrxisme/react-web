import { LOGIN, DECREMENT } from '../constants'
const initState = {
    hasGetInfo: true,
    access: ['student'],
    token: '',
    username: '',
    password: ''
}
function assignObj(state, obj) {
    return Object.assign({}, state, obj)
}
const userData = (state = initState, action) => {
    const data = action.payload
    if (action.type === LOGIN && data.msg !== 'success') {
        return state
    }
    switch (action.type) {
        case LOGIN:
            return assignObj(state, { username: data.info.username, password: data.info.password, token: data.info.token })
        case DECREMENT:
            return assignObj(state, { count: state.count - action.amount })
        default:
            return state
    }
}

export default userData
