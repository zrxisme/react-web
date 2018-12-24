import React, { Component } from 'react'
import {
    Row, Col
} from 'antd';
import MonacoEditor from 'react-monaco-editor';
export default class MyCodeMirror extends Component {
    state = {
        code:'<h1>I ♥ react-codemirror2</h1>'
    }
    editorDidMount() {
    }
    onChange() { }
    render() {
        const code = this.state.code;
        const options = {
            selectOnLineNumbers: true
        };
        return (
            <MonacoEditor
                width="800"
                height="600"
                language="javascript"
                theme="vs-dark"
                value={code}
                options={options}
                onChange={this.onChange}
                editorDidMount={this.editorDidMount}
            />
        )
    }
}