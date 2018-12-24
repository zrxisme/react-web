import React, { Component } from 'react'
import User from './components/user'
import LockScreen from './components/lockscreen'
import MessageTip from './components/messagetip'
import BreadPage from './components/breadpage'
import {Icon} from 'antd';
import './headerBar.less'
class HeaderBar extends Component {
    state = {
        msgText:'你有3条新的消息',
        mesCount:3,
        user:{
            name:"钟日日",
            avatar:"https://media.kaolaplay.com/1508291128105.png"
        }
    }
    render() {
        let {onToggle, collapsed,routes} = this.props
        let {mesCount,user,msgText} = this.state
        return (
            <>
            <Icon
                className="trigger"
                type={collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={onToggle}
            />
            <BreadPage routes={routes}></BreadPage>
            <User className="user_container" user={user} />
             <LockScreen></LockScreen>
             <MessageTip count={mesCount} text={msgText}></MessageTip>
            </>
        )
    }

}

export default HeaderBar