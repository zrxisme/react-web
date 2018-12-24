import React, { Component } from 'react'
import { Icon,Tooltip } from 'antd'
import './index.less'
class FullScreen extends Component {
    state = {
        value:false
    }
    handleFullscreen() {
        let main = document.body
        if (this.state.value) {
            if (document.exitFullscreen) {
                document.exitFullscreen()
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen()
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen()
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen()
            }
             this.setState({
                value:false
            })
        } else {
            if (main.requestFullscreen) {
                main.requestFullscreen()
            } else if (main.mozRequestFullScreen) {
                main.mozRequestFullScreen()
            } else if (main.webkitRequestFullScreen) {
                main.webkitRequestFullScreen()
            } else if (main.msRequestFullscreen) {
                main.msRequestFullscreen()
            }
            this.setState({
                value:true
            })
        }
    }
    render() {
        let {value} = this.state
        return (
            <div onClick={this.handleFullscreen.bind(this)} className="full_screen">
                <Tooltip placement="bottom" title={value ? '退出全屏' : '全屏'}>
                    <Icon style={{ fontSize: "25px"}} type="gateway" />
                </Tooltip>

            </div>
        )
    }
}


export default FullScreen