import React, { Component } from 'react'
import { routerShow } from '../../../../util/libs'
import store from '../../../../store'
import './sideMenu.less'
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const storeData = store.getState().userData
const {access} = storeData
class SideMenu extends Component {
    state = {
        current: `menu${this.props.menuList[0].path}`,
        showedMenuList: []
    }
    componentDidMount() {
        let {menuList} = this.props
        let haveChildren = false
        menuList = menuList.filter((item) => {
            if (item.path === '/') {
                return item
            }
        })[0]  //过滤路由，只在菜单栏显示跟路由的菜单

        if (routerShow(menuList, access)) {
            if (menuList.childRoutes && menuList.childRoutes.length > 0) {
                menuList.childRoutes.forEach(children => {
                    if (children.path && routerShow(children, access)) {
                        haveChildren = true
                    }
                })
                let showedMenuList = []
                if (haveChildren) {
                    showedMenuList = this.getMenuList(menuList.childRoutes)
                } else {
                    showedMenuList = (
                        <Menu.Item key={`menu${menuList.path}`} >
                            {<span><Icon type={menuList.meta.icon || 'team'} /><span>{menuList.meta.title || '无标题'}</span></span>}
                        </Menu.Item>
                    )
                }
                this.setState({
                    showedMenuList
                })
            }
        }

    }
    getMenuList(menuList) {   //递归获取子菜单
        return menuList.map((item, index) => {
            if (!item.path || !routerShow(item, access)) {
                return ''
            }
            let haveChildren = false
            if (routerShow(item, access)) {
                if (item.childRoutes && item.childRoutes.length > 0) {
                    item.childRoutes.forEach(children => {
                        if (children.path && routerShow(children, access)) {
                            haveChildren = true
                        }
                    })
                }
                if (haveChildren) {
                    return (
                        <SubMenu key={`menu${item.path}`} title={<span><Icon type={item.meta.icon || 'team'} /><span>{item.meta.title}</span></span>}>
                            {item.childRoutes.map(itemChildren => {
                                if (routerShow(itemChildren, access)) {
                                    if (itemChildren.childRoutes && itemChildren.childRoutes.length > 0) {
                                        return this.getMenuList(itemChildren)
                                    } else {
                                        return (
                                            <Menu.Item key={`menu${itemChildren.path}`}><Icon type={itemChildren.meta.icon || 'team'} />{itemChildren.meta.title || '无标题'}</Menu.Item>
                                        )
                                    }
                                } else {
                                    return <></>
                                }
                            })}
                        </SubMenu>
                    )
                } else {
                    return (
                        <Menu.Item key={`menu${item.path}`} >
                            {<span><Icon type={item.meta.icon || 'team'} /><span>{item.meta.title || '无标题'}</span></span>}
                        </Menu.Item>
                    )
                }
            }
        })
    }
    handleClick(e) {
        this.setState({
            current: e.key,
        });
        let router = ''
        e.keyPath.reverse()
        if (e.keyPath.length > 1) {
            router = e.keyPath.join("/")
        } else {
            router = e.keyPath[0]
        }
        router = router.replace(/menu/g, '')
         if(router.indexOf("/")!=0){
           router = "/" + router
         }
        this.props.changeRouter(router)
    }//获取菜单点击事件

    render() {
        let {current, showedMenuList} = this.state
        return (
            <div className="side-menu-wrapper">
                <div className="logo" />
                <Menu onClick={this.handleClick.bind(this)} theme="dark" defaultSelectedKeys={[current]} mode="inline" ref="menu">
                    {showedMenuList}
                </Menu>
            </div>
        )
    }
}

export default SideMenu