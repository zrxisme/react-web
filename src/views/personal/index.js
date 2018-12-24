import React, { Component } from 'react'
import { Col, Row, Icon, Button, Modal, Form, Input, Upload } from 'antd';
import "./index.less"
export default class Person extends Component {
    constructor() {
        super(...arguments)
        this.state = {
            userInfo: {
                avatar: 'https://media.kaolaplay.com/1508291128105.png',
                username: '钟日日',
                stu_number: '1540520119',
                classNameName: 15,
                phone: 12345678955,
                qq: 1204718708,
                major: "汽车与烹饪",
                github: "https://github.com/zrxisme",
                description: "越努力越幸运！"
            }
        }
    }
    showModal() { }
    handleCancel() {

    }

    handleOk() { }
    componentDidMount() {
    }
    render() {
        let {userInfo} = this.state
        return (
            <div className="detail-container">
                <img className="bg-img" alt="bg" src="https://media.kaolaplay.com/ggggggd.png" />
                <div className="detail open">
                    <div className="detail-wrapper">
                        <div className="detail-main">
                            <div className="text">
                                <img className='seller-avatar' src={userInfo.avatar} alt="teacher_avatar" />
                            </div>
                            <div className="overview">
                                <div className="desc">
                                    <span className="text">{userInfo.username}</span>
                                </div>
                                <div className="remark">
                                    <div className="block">
                                        <div className="content">
                                            <span className="stress">{userInfo.major}</span>
                                        </div>
                                        <span>专业方向</span>
                                    </div>
                                    <div className="block">
                                        <div className="content">
                                            <span className="stress">{userInfo.phone}</span>
                                        </div>
                                        <span>联系方式</span>
                                    </div>
                                    <div className="block">
                                        <div className="content">
                                            <span className="stress">{userInfo.qq}</span>
                                        </div>
                                        <span>QQ</span>
                                    </div>
                                    <div className="block">
                                        <div className="content">
                                            <span className="stress">{userInfo.github}</span>
                                        </div>
                                        <span>github地址</span>
                                    </div>
                                </div>
                            </div>
                            <div className="title">
                                <div className="text">个人简介</div>
                            </div>
                            <div className="bulletin">
                                <span className="content">{userInfo.description}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}