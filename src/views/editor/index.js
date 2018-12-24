import React, { Component } from 'react'
import './index.less'
import {
    Form, Select, Radio,
    Slider, Button, Upload, Icon, Rate,
    Row, Col
} from 'antd';
import Expand from './components/expand'
const rawContentState = { "entityMap": { "0": { "type": "IMAGE", "mutability": "MUTABLE", "data": { "src": "http://i.imgur.com/aMtBIep.png", "height": "auto", "width": "100%" } } }, "blocks": [{ "key": "9unl6", "text": "", "type": "unstyled", "depth": 0, "inlineStyleRanges": [], "entityRanges": [], "data": {} }, { "key": "95kn", "text": " ", "type": "atomic", "depth": 0, "inlineStyleRanges": [], "entityRanges": [{ "offset": 0, "length": 1, "key": 0 }], "data": {} }, { "key": "7rjes", "text": "", "type": "unstyled", "depth": 0, "inlineStyleRanges": [], "entityRanges": [], "data": {} }] };
const { Option } = Select;
class MyEditor extends Component {
     state = {
        contentState: rawContentState,
        editorContent:'undefined',
        editorState: '',
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }
    normFile = (e) => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    }
    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };
   onEditorChange = (editorContent) => {
        this.setState({
            editorContent,
        });
    };

    componentDidMount() {

    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        const {editorState,editorContent} = this.state
        return (
            <Row className="form_container">
                <Col span={20}>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Item
                            {...formItemLayout}
                            label="标题"
                        >
                            <span className="ant-form-text">新建内容</span>
                        </Form.Item>
                        <Form.Item
                            {...formItemLayout}
                            label="单选"
                            hasFeedback
                        >
                            {getFieldDecorator('select', {
                                rules: [
                                    { required: true, message: 'Please select your country!' },
                                ],
                            })(
                                <Select placeholder="Please select a country">
                                    <Option value="新建内容">新建内容</Option>
                                    <Option value="更新内容">更新内容</Option>
                                </Select>
                                )}
                        </Form.Item>

                        <Form.Item
                            {...formItemLayout}
                            label="富文本"
                        >
                         <Expand editorState={editorState} editorContent={editorContent} onEditorChange={this.onEditorChange} onEditorStateChange={this.onEditorStateChange} />
                        </Form.Item>
                        <Form.Item
                            {...formItemLayout}
                            label="滑动"
                        >
                            {getFieldDecorator('slider')(
                                <Slider marks={{
                                    0: 'A', 20: 'B', 40: 'C', 60: 'D', 80: 'E', 100: 'F',
                                }}
                                />
                            )}
                        </Form.Item>
                        <Form.Item
                            {...formItemLayout}
                            label="单选按钮"
                        >
                            {getFieldDecorator('radio-button')(
                                <Radio.Group>
                                    <Radio.Button value="a">item 1</Radio.Button>
                                    <Radio.Button value="b">item 2</Radio.Button>
                                    <Radio.Button value="c">item 3</Radio.Button>
                                </Radio.Group>
                            )}
                        </Form.Item>
                        <Form.Item
                            {...formItemLayout}
                            label="评分"
                        >
                            {getFieldDecorator('rate', {
                                initialValue: 3.5,
                            })(
                                <Rate />
                                )}
                        </Form.Item>
                        <Form.Item
                            {...formItemLayout}
                            label="拖动上传"
                        >
                            <div className="dropbox">
                                {getFieldDecorator('dragger', {
                                    valuePropName: 'fileList',
                                    getValueFromEvent: this.normFile,
                                })(
                                    <Upload.Dragger name="files" action="/upload.do">
                                        <p className="ant-upload-drag-icon">
                                            <Icon type="inbox" />
                                        </p>
                                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                        <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                                    </Upload.Dragger>
                                    )}
                            </div>
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{ span: 12, offset: 6 }}
                        >
                            <Button type="primary" htmlType="submit">提交</Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        )
    }
}

export default Form.create()(MyEditor)