import { canTurnTo, getToken, addRouterHistory } from '../util/libs'
import store from '../store'
import Main from '../components/main/main'
import MyEditor from '../views/editor'
import Login from '../views/login/login'
import ErrorPage from '../views/error/error'
import Home from '../views/home/home'
import Person from '../views/personal'
import MyMap from '../views/map'
import MyExcel from '../views/excel'
import AntComponent from '../views/antComponent'
import Card from '../views/antComponent/Card'
import MyCodeMirror from '../views/antComponent/code'
import ReChar from '../views/antComponent/rechar'
import MyMove from '../views/antComponent/move'
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
    name: 'first-page',
    component: Main,
    meta: {
        icon: 'home',
        title: '首页',
        hideInMenu: false,
        access: ['student'],
    },
    indexRoute: { component: Home },
    childRoutes: [
        {
            path: "person",
            name: 'person-page',
            component: Person,
            onEnter: onRouteEnter,
            meta: {
                icon: 'team',
                title: '个人中心',
                hideInMenu: false,
                access: ['student'],
            }
        }, {
            path: "editor",
            name: 'editor-page',
            component: MyEditor,
            onEnter: onRouteEnter,
            meta: {
                icon: 'read',
                title: '富文本编辑器',
                hideInMenu: false,
                access: ['student'],
            }
        }, {
            path: "excel",
            name: 'excel-page',
            component: MyExcel,
            onEnter: onRouteEnter,
            meta: {
                icon: 'file',
                title: 'excel表导入',
                hideInMenu: false,
                access: ['student'],
            }
        }, {
            path: "map",
            name: 'map-page',
            component: MyMap,
            onEnter: onRouteEnter,
            meta: {
                icon: 'global',
                title: '地图控件',
                hideInMenu: false,
                access: ['student'],
            }
        }, {
            path: "antComponent",
            name: 'antComponent-page',
            onEnter: onRouteEnter,
            indexRoute: { component: Card },
            meta: {
                icon: 'switcher',
                title: '组件列表',
                hideInMenu: false,
                access: ['student'],
            },
             childRoutes: [{
                path: "code",
                name: 'code-page',
                component: MyCodeMirror ,
                onEnter: onRouteEnter,
                meta: {
                    icon: 'form',
                    title: '代码编辑器',
                    hideInMenu: false,
                    access: ['student'],
                }
            },{
                path: "move",
                name: 'move-page',
                component: MyMove ,
                onEnter: onRouteEnter,
                meta: {
                    icon: 'rocket',
                    title: 'react动画',
                    hideInMenu: false,
                    access: ['student'],
                }
            },{
                path: "rechar",
                name: 'rechar-page',
                component: ReChar ,
                onEnter: onRouteEnter,
                meta: {
                    icon: 'bar-chart',
                    title: '可视化图表',
                    hideInMenu: false,
                    access: ['student'],
                }
            },
            {
                path: "card",
                name: 'card-page',
                component: Card,
                onEnter: onRouteEnter,
                meta: {
                    icon: 'layout',
                    title: '卡片组件',
                    hideInMenu: false,
                    access: ['student'],
                }
            }]
        }],
    onEnter: onRouteEnter
}, {
    path: "/login",
    name: 'login-page',
    component: Login,
    onEnter: onRouteEnter,
    meta: {
        icon: 'desktop',
        title: '登陆',
        hideInMenu: true,
    }
},
{
    path: "/error_page",
    name: 'error-page',
    component: ErrorPage,
    meta: {
        icon: 'file',
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
    const route = nextState.routes[nextState.routes.length - 1].path ? nextState.routes[nextState.routes.length - 1] : nextState.routes[0]
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


