import Cookies from 'js-cookie'
import config from '../config'
const LOGIN_TOKEN = "my-app"

export function canTurnTo(route, access) {
    if (route.meta.access) {
        if (Array.isArray(access)) {
            access = access[0]
        }
        return route.meta.access.some(item => item === access)
    } else {
        return true
    }



}  //路由判断，通过access参数进行权限控制

export function routerShow(route, access) {
    if (route.meta.access) {
        if (Array.isArray(access)) {
            access = access[0]
        }
        return route.meta.access.some(item => item === access)&&!route.meta.hideInMenu
    } else {
        return !route.meta.hideInMenu
    }



}  //路由判断，通过路由显示菜单栏

export function getToken() {
    const token = Cookies.get(LOGIN_TOKEN)
    if (token) return token
    else return false
}//获取保存的token

export function setToken(token) {
    Cookies.set(LOGIN_TOKEN, token, { expires: config.cookieExpires || 1 })
}//设置token信息