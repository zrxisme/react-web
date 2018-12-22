import React, { Component } from 'react'
import PropTypes from "prop-types";
import {
    Breadcrumb, Icon
} from 'antd';
import './index.less'
class BreadPage extends Component {

    state = {
        beadList: []
    }
    static contextTypes = {
        router: PropTypes.object.isRequired,
    }
    componentWillReceiveProps(nextProps) {
        this.getRouterMsg(nextProps.routes)
    }
    changeRouter(path) {
        this.context.router.push(path)
    }
    getRouterMsg(routes) {
        if (!routes || routes[0].path !== "/") {
            return
        }
        const beadList = routes.map(child => {
            if (child.path) {
                return (
                    <Breadcrumb.Item className="bread_item" key={child.path} onClick={this.changeRouter.bind(this, child.path)}>
                        <Icon style={{fontSize:'15px',marginRight:'6px'}} type={child.meta.icon} />
                        <span>{child.meta.title}</span>
                    </Breadcrumb.Item>
                )
            }

        })
        this.setState({
            beadList
        })
    }
    render() {
        let {beadList} = this.state
        return (
            <div className="bread_container">
                <Breadcrumb>
                    {beadList}
                </Breadcrumb>
            </div>
        )
    }
}


export default BreadPage