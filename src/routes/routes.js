import { canTurnTo, getToken } from '../util/libs'
import store from '../store'
import Main from '../components/main/main'
import About from '../views/about/about'
import Login from '../views/login/login'
import ErrorPage from '../views/error/error'
import Home from '../views/home/home'

const routes = [{
    path: "/",
    name:'first-page',
    component: Main,
    meta: {
      icon:'user',  
      title: '首页',
      hideInMenu: false,
      access: ['student'],
    },
    indexRoute: { component: Home },
    childRoutes: [{
    path: "/about",
    name:'about-page',
    component: About,
    onEnter: onRouteEnter,
     meta: {
       icon:'team',   
      title: '关于',
      hideInMenu: false,
      access: ['student'],
    }
    }],
    onEnter: onRouteEnter
}, {
    path: "/about",
    name:'about-page',
    component: About,
    onEnter: onRouteEnter,
     meta: {
       icon:'team',   
      title: '关于',
      hideInMenu: false,
      access: ['student'],
    }
}, {
    path: "/login",
    name:'login-page',
    component: Login,
    onEnter: onRouteEnter,
    meta: {
      icon:'desktop',
      title: '登陆',
      hideInMenu: true,
    }
},
{
    path: "/error_page",
     name:'error-page',
    component: ErrorPage,
    meta: {
         icon:'file',
      title: '错误',
      hideInMenu: true,
    }
}]


const canChangeRouter = (route, access, callback, replace) => {
    if (canTurnTo(route, access)) {
    } else {
        replace({
            pathname: "/error_page"
        })
    }
}
function onRouteEnter(nextState, replace, callback) {
    const route = nextState.routes[0]
    const storeData = store.getState().userData
    const {access, hasGetInfo} = storeData
    let token = getToken()
    if (!token && route.path === '/login') {
    } else if (!token && route.path !== '/login') {
        replace({
            pathname: "/login"
        })
    } else if (token && route.path === '/login') {
        replace({
            pathname: "/"
        })
    } else {
        if (hasGetInfo) {
            canChangeRouter(route, access, callback, replace)
        }
    }
    callback()
}

export default routes


