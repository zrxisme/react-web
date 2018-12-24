import React, { Component } from 'react'
import { Card, Icon } from 'antd';
import './index.less'
class InforCard extends Component {
    render() {
        let {color, icon, title,count} = this.props
        return (
            <Card  className="info-card-wrapper">
                <div className="content-con">
                    <div className="left-area" style={{ background: color }}>
                            <Icon type={icon} style={{color:'white',fontSize:'45px',lineHeight:'108px'}}></Icon>
                    </div>
                    <div className="right-area" style={{ width: "34px" }}>
                        <div className="count_num">{count}</div>
                        <div>{title}</div>
                    </div>
                </div >
            </Card >
        )
    }
}

export default InforCard