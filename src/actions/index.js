import { LOGIN } from '../constants'
import { setToken } from '../util/libs'
import { createAction } from 'redux-actions'
import { userLogin } from '../api/user'
export const login = info => {
    return {
        type: LOGIN,
        payload: userLogin(info)
            .then((res) => {
                if (res.data.message == 'ok') {
                    setToken(res.data.token)
                    info.token = res.data.token
                    return {
                        info: info,
                        msg: 'success'
                    }
                } else {
                    return {
                        info: {},
                        msg: 'fail'
                    }
                }
            })
            .catch((err) => {
                return {
                    info: {},
                    msg: 'fail'
                }
            })
    }
}

