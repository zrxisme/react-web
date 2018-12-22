import { canTurnTo, getToken,addRouterHistory } from '../util/libs'
import store from '../store'
import Main from '../components/main/main'
import About from '../views/about/about'
import Login from '../views/login/login'
import ErrorPage from '../views/error/error'
import Home from '../views/home/home'

/**
 *  meta: {
      icon:'',  侧面菜单栏显示的图标
      title: '' 侧面菜单栏显示的标题
      hideInMenu: false, 是否显示菜单栏（注意只有在根路由下的子路由才有效！）
      access: [''], 用户权限控制，不填默认所有用户均可访问
    },
 * 
 */
const routes = [{    
    path: "/",     //侧面菜单栏的路由必须是根路由的子路由哦！
    name:'first-page',
    component: Main,
    meta: {
      icon:'home',  
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
}, {                     //非跟路由的子路由不会再侧面菜单栏中显示哦
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
    const route = nextState.routes[nextState.routes.length-1].path?nextState.routes[nextState.routes.length-1]:nextState.routes[0]
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
    addRouterHistory(route)
    callback()
}

export default routes


