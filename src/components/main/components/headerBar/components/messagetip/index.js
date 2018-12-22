import React, { Component } from 'react'
import {
    Tooltip, Icon,Badge
} from 'antd';
import './index.less'
class MessageTip extends Component {
    render() {
        let {text,count} = this.props
        return (
            <div className="message_tip">
                <Tooltip placement="bottom" title={text}>
                    <Badge count={count} dot>
                        <Icon style={{fontSize:'18px'}} type="notification" />
                    </Badge>
                </Tooltip>
            </div>
        )
    }
}


export default MessageTip