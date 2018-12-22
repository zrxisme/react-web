import React, { Component } from 'react'
import {
    Dropdown, Menu, Icon
} from 'antd';
import './index.less'
class User extends Component {
    render() {
        const {user} = this.props
        const menu = (
            <Menu>
                <Menu.Item key="0">
                    <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">退出登录</a>
                </Menu.Item>
            </Menu>
        )
        return (
            <div className="user_container">
                <Dropdown overlay={menu}>
                    <a className="ant-dropdown-link" href="#">
                        {user.name} <img className="avatar_icon" src={user.avatar}/><Icon type="down" />
                    </a>
                </Dropdown>
            </div>
        )
    }
}


export default User