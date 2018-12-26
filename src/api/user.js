import axios from '../util/request'
const csrfToken = "djgfmgmdfgkmfkgldgd"
export const userLogin = ({username, password}) => {
    const data = {
        username,
        password,
        _csrf: csrfToken
    }
    return axios.request({
        url: "/index.php?r=test%2Findex",
        data,
        method: "post"
    })
}