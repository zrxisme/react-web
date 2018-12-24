import { LOGIN } from '../constants'
import { setToken } from '../util/libs'
export const login = info => {
    setToken(info.token)
    return {
        type: LOGIN,
        info
    }
}