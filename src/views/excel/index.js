import React, { Component } from 'react'
import { Table, Upload, message, Button, Icon } from 'antd';
import './index.less'
import excel from '../../util/excel'
import config from '../../config'
import {getMyDate} from '../../util/libs'
const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro
export default class MyExcel extends Component {
    state = {
        file: '',
        uploadLoading: false,
        progressPercent: 0,
        showProgress: false,
        showRemoveFile: false,
        newData: [],
        fileProps: {
            name: 'file',
            action: baseUrl + '/upload/work',
            headers: {
                authorization: 'authorization-text',
            }
        },
        data: [{
            key: '1',
            name: '钟日日',
            time: "2018-12-24",
            code: '12345',
            major: "航空航天",
            experient: 8,
            description: "非常帅气"
        }],
        columns: [{
            title: '上传时间',
            dataIndex: 'time',
            key: 'time'
        }, {
            title: '教师工号',
            dataIndex: 'code',
            key: 'code',
        }, {
            title: '教师姓名',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: '负责方向',
            key: 'major',
            dataIndex: 'major'
        }, {
            title: '教学经验(年)',
            key: 'experient',
            dataIndex: 'experient',
            align: 'center'
        }, {
            title: '简介',
            key: 'description',
            dataIndex: 'description'
        },
        {
            title: '操作', dataIndex: '', key: 'x', render: () => <span>删除</span>,
        }]
    }
    onChange(info) {
        if (info.file.status !== 'uploading') {
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} 问件上传成功`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} 文件上传失败`);
        }
    }
    beforeUpload(file) {
        const fileExt = file.name.split('.').pop().toLocaleLowerCase()
        if (fileExt === 'xlsx' || fileExt === 'xls') {
            this.readFile(file)
            this.setState({
                file
            })
        } else {
            message.warning({
                title: '文件类型错误',
                desc: '文件：' + file.name + '不是EXCEL文件，请选择后缀为.xlsx或者.xls的EXCEL文件。'
            })
        }
        return false
    }
    readFile(file) {
        const reader = new FileReader()
        reader.readAsArrayBuffer(file)
        reader.onloadstart = e => {
            this.setState({
                uploadLoading: false,
                tableLoading: false,
                showProgress: true
            })
        }
        reader.onprogress = e => {
            this.progressPercent = Math.round(e.loaded / e.total * 100)
        }
        reader.onerror = e => {
            message.error('文件读取出错')
        }
        reader.onload = e => {
            message.info('文件读取成功')
            const data = e.target.result
            const { results } = excel.read(data, 'array')
            let infos = []
            results.forEach((item, index) => {
                infos.push({
                    key:'key' + index,
                    time: getMyDate(new Date().getTime(),"yyyy-MM-dd"),
                    code: item['教师工号'],
                    name: item['教师姓名'],
                    major: item['负责方向'],
                    experient: item["教学经验"],
                    description: item['教师简介'],
                })

            })
            this.setState({
                newData: infos,
                uploadLoading: false,
                tableLoading: false,
                showRemoveFile: true
            })
        }
    }
    render() {
        let {data, columns, fileProps, newData} = this.state
        return (
            <div className="excel_container">
                <Table columns={columns} dataSource={data.concat(newData)} />
                <Upload onChange={this.onChange.bind(this)} beforeUpload={this.beforeUpload.bind(this)} {...fileProps}>
                    <Button>
                        <Icon type="upload" /> 导入信息
    </Button>
                </Upload>
                <a style={{ display: "block", marginTop: "10px" }} download="w3logo" href="https://media.kaolaplay.com/message1.xlsx">点击下载上传模板</a>
            </div>
        )
    }
}