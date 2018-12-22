import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    Dropdown, Menu, Icon
} from 'antd';
import './index.less'
import { clearMessage } from '../../../../../../util/libs'
class User extends Component {
    static contextTypes = {
        router:PropTypes.object.isRequired
    }
    logout(){
           clearMessage()  
     this.context.router.push("/login")
   
    }
    render() {
        const {user} = this.props
        const menu = (
            <Menu>
                <Menu.Item key="0">
                    <span target="_blank" rel="noopener noreferrer" onClick={this.logout.bind(this)}>退出登录</span>
                </Menu.Item>
            </Menu>
        )
        return (
            <div className="user_container">
                <Dropdown overlay={menu}>
                    <span className="ant-dropdown-link">
                        {user.name} <img alt={user.name} className="avatar_icon" src={user.avatar}/><Icon type="down" />
                    </span>
                </Dropdown>
            </div>
        )
    }
}


export default User