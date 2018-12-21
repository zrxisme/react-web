import { LOGIN, DECREMENT } from '../constants'
const initState = {
    hasGetInfo:true,
    access:['student'],
    token: '',
    username:'',
    password:''
}
function assignObj(state, obj) {
    return Object.assign({}, state, obj)
}
const userData = (state = initState, action) => {
    switch (action.type) {
        case LOGIN:
            return assignObj(state, { username: action.info.username,password: action.info.password,token:action.info.token })
        case DECREMENT:
            return assignObj(state,{ count: state.count - action.amount })
        default:
            return state
    }
}

export default userData
