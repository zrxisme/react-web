import React,{Component} from 'react'
import { routerShow} from '../../../../util/libs'
import store from '../../../../store'
import './sideMenu.less'
import {
  Layout, Menu, Breadcrumb, Icon,
} from 'antd'; 
const SubMenu = Menu.SubMenu;
const storeData = store.getState().userData
const {access} = storeData
class SideMenu extends Component{
    state = {
        current:`menu${this.props.menuList[0].path}`
    }
    
    handleClick(e){
    this.setState({
      current: e.key,
    });
    const router = e.key.substr(4)
    this.props.changeRouter(router)
}//获取菜单点击事件

    render(){
        let {menuList} = this.props
        let {current} = this.state
        let haveChildren = false
        return (
  <div className="side-menu-wrapper">
       <div className="logo" />
    <Menu onClick={this.handleClick.bind(this)} theme="dark" defaultSelectedKeys={[current]} mode="inline" ref="menu">
        {menuList.map(item=>{
                if(routerShow(item,access)){
                    if(item.children&&item.childRoutes.length>0){
                        item.childRoutes.forEach(children=>{
                           if(children.path&&routerShow(children,access)){
                           haveChildren = true
                          }
                        })
                    }
                    if(haveChildren){
                    return (
                     <SubMenu key={`menu${item.name}`} title={<span><Icon type={item.meta.icon || 'team'} /><span>{item.meta.title}</span></span>}>
                     {item.childRoutes.filter(itemChildren=>{
                         if(routerShow(itemChildren,access)){
                           return (
                              <Menu.Item key={`menuitem-${itemChildren.name}`}>{itemChildren.meta.title||'无标题'}</Menu.Item>
                         )
                         } 
                     })}
                     </SubMenu>
                    )
                    }else{
                        return (
                     <Menu.Item key={`menu${item.path}`} >
                         {<span><Icon type={item.meta.icon || 'team'} /><span>{item.meta.title||'无标题'}</span></span>}
                     </Menu.Item>
                    ) 
                    }
                }
        })}
    </Menu>
  </div>
        )
    }
}

export default SideMenu