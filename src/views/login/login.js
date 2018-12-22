import React, { Component } from 'react'
import { connect } from 'react-redux'
import './login.less'
import { login} from '../../actions'
import { Card, Form, Icon, Input, Button } from 'antd';
import PropTypes from "prop-types";
const FormItem = Form.Item;
class Login extends Component {
    constructor() {
        super(...arguments)
        this.state = {
            info:{
            username: "",
            password: "",
            token: ""
        }
        }
    }
     static contextTypes = {
            router: PropTypes.object.isRequired,
        }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const {username,password} = values
                if(username==='admin'&&password==='admin'){
                       this.props.loginClick({...values,token:'user_token'})
                        this.context.router.push("/")
                }
               
            }
        });
    }
    render() {
       const { getFieldDecorator } = this.props.form; 
        return (
            <div className="login">
                <div className="login-con">
                    <Card title="欢迎登陆">
                        <div className="form-con">
                            <Form onSubmit={this.handleSubmit} className="login-form">
                                <FormItem>
                                    {getFieldDecorator('username', {
                                        rules: [{ required: true, message: '默认用户名admin!' }],
                                    })(
                                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="默认用户名admin!" />
                                        )}
                                </FormItem>
                                <FormItem>
                                    {getFieldDecorator('password', {
                                        rules: [{ required: true, message: '默认密码admin!' }],
                                    })(
                                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="默认密码admin!" />
                                        )}
                                </FormItem>
                                <FormItem>
                                    {/*<a className="login-form-forgot" href="">忘记密码</a>*/}
                                    <Button type="primary" htmlType="submit" className="login-form-button">登陆</Button>
                                </FormItem>
                            </Form>

                            <p className="login-tip">react网站模板平台</p>
                        </div>
                    </Card>,
                </div> >
    </div >

        )
    }
}
const getLoginAction = dispatch => {
    return {
        loginClick: (info) => {
            return dispatch(login(info))
        }
    }
}

const getLoginState = state => {
    return {
        state: state
    }
}
export default  Form.create()(connect(getLoginState, getLoginAction)(Login))