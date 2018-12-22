import Cookies from 'js-cookie'
import config from '../config'
const LOGIN_TOKEN = "my-app"
const ROUTER_HISTORY = "router-history"
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
    if (route && route.meta && route.meta.access) {
        if (Array.isArray(access)) {
            access = access[0]
        }
        return route.meta.access.some(item => item === access) && !route.meta.hideInMenu
    } else {
        return !route ? false : !route.meta || !route.meta.hideInMenu
    }



}  //路由判断，通过路由显示菜单栏

export function addRouterHistory(route) {
    let historys = Cookies.get(ROUTER_HISTORY)
    let routes = historys ? JSON.parse(historys).routes : []
    if (!routes.some(item => item.path === route.path) && route.path !== '/' && !route.meta.hideInMenu) {
        routes.push(route)
        Cookies.set(ROUTER_HISTORY, { routes }, { expires: config.cookieExpires || 1 })
    }
}

export function getRouteHistory() {
    let routes = Cookies.get(ROUTER_HISTORY)
    routes = routes ? JSON.parse(routes).routes : []
    if (routes) return routes
    else return []
}//获取保存的路由

export function clearMessage() {
    Cookies.set(ROUTER_HISTORY, {}, { expires: 0 })
    Cookies.set(LOGIN_TOKEN, '', { expires:0 })
}//页面登出,清除token

export function getToken() {
    const token = Cookies.get(LOGIN_TOKEN)
    if (token) return token
    else return false
}//获取保存的token

export function setToken(token) {
    Cookies.set(LOGIN_TOKEN, token, { expires: config.cookieExpires || 1 })
}//设置token信息