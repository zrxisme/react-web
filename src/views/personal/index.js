import React, { Component } from 'react'
import { Col, Row, Icon, Button, Modal, Form, Input,Upload } from 'antd';
import "./index.less"
export default class Person extends Component {
    constructor() {
        super(...arguments)
        this.state = {
            visible: false,
            confirmLoading: false,
            imageUrl: '',
            uploadUrl: '',
            uploadList: [],
            qqFlag: false,
            phoneFlag: false,
            form: {
                qq: '',
                form: ''
            },
            avatarFlag: false,
            ok_modal: false,
            userInfo: {
                avator:'https://media.kaolaplay.com/1508291128105.png',
                name:'钟日日',
                stu_number:'1540520119',
                className:15,
                phone:13066958445,
                qq:1204718708,
                major:"汽车与烹饪",
                github:"https://github.com/zrxisme",
                description:"越努力越幸运！"
            }
        }
    }
    showModal() { }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
   handleCancel(){

   }

   handleOk(){}
    componentDidMount() {
    }
    render() {
        let {userInfo, uploadUrl, form, ok_modal, phoneFlag, qqFlag, avatarFlag, imageUrl, visible} = this.state
        const uploadButton = (
            <div>
                <Icon type={this.state.loading ? 'loading' : 'plus'} />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (
            <div>
                <div className="goods-new">
                    <Row>
                        <Col span={7}  >
                            <div className="user_container_wrapper">
                                <div className="avatat_wrapper">
                                    <img className="user_avatar" src={userInfo.avator} alt={userInfo.avator} />
                                    <div className="user_name">
                                        <span>{userInfo.name}</span> | <span onClick={this.showModal.bind(this, 'avatarFlag')} className="change_avatar">修改头像</span>
                                    </div>
                                </div>
                                <div className="user_tip_container">
                                    <div className="item"> 查看任务</div>
                                    <div className="item"> 完成周报</div>
                                    <div className="item"> 选择论文</div>
                                    <div className="item"> 消息通知</div>
                                </div>
                            </div >
                        </Col >
                        <Col span={17}>
                            <div className="info_detail">
                                <div className="detail_item">
                                    <div className="label">学号</div>
                                    <div className="value">{userInfo.stu_number}</div>
                                </div>
                                <div className="detail_item">
                                    <div className="label">年级</div>
                                    <div className="value">{userInfo.className}级</div>
                                </div>
                                <div className="detail_item" label="专业方向">
                                    <div className="label">专业方向</div>
                                    <div className="value">{userInfo.major}</div>
                                </div>
                                <div className="detail_item" label="联系方式">
                                    <div className="label">联系方式</div>
                                    <div className="value">{userInfo.phone ? userInfo.phone : '暂无'} | <span className="change_avatar" onClick={this.showModal.bind(this, 'phoneFlag')}>修改</span></div>
                                </div>
                                <div className="detail_item">
                                    <div className="label">QQ号码</div>
                                    <div className="value">{userInfo.qq ? userInfo.qq : '暂无'} | <span className="change_avatar" onClick={this.showModal.bind(this, 'qqFlag')}>修改</span></div>
                                </div>
                                <div className="detail_item">
                                    <div className="label">github地址</div>
                                    <div className="value">{ userInfo.github}</div>
                                </div>
                                <div className="detail_item" label="我的介绍">
                                    <div className="label">我的介绍</div>
                                    <div className="value">{userInfo.description }</div>
                                </div>
                            </div >
                        </Col >
                    </Row >
                    <Modal
                        title="消息更新"
                        visible={visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                    >
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item>
                                {
                                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                                    }
                            </Form.Item>
                            <Form.Item>
                                {
                                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                                    }
                            </Form.Item>
                        </Form>
                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="//jsonplaceholder.typicode.com/posts/"
                        >
                            {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
                        </Upload>
                        <div slot="footer">
                            <Button onClick="updateInfo" type="primary">确认</Button>
                        </div >
                    </Modal >
                </div >
            </div >
        )
    }
}