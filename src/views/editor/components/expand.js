import React, { Component } from 'react'
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
export default class Expand extends Component {
    onEditorStateChange = (editorState) => {
        this.props.onEditorStateChange(editorState)
    };
    onEditorChange = (editorContent) => {
         this.props.onEditorChange(editorContent)
    };
    imageUploadCallBack(){

    }
    render() {
        const {editorState} = this.props
        return (
            <Editor
                editorState={editorState}
                toolbarClassName="home-toolbar"
                wrapperClassName="home-wrapper"
                editorClassName="home-editor"
                onEditorStateChange={this.onEditorStateChange}
                toolbar={{
                    history: { inDropdown: true },
                    inline: { inDropdown: false },
                    list: { inDropdown: true },
                    textAlign: { inDropdown: true },
                    image: { uploadCallback: this.imageUploadCallBack },
                }}
              onContentStateChange={this.onEditorChange}
                placeholder="请输入内容"
                spellCheck
                onFocus={() => { console.log('focus') }}
                onBlur={() => { console.log('blur') }}
                onTab={() => { console.log('tab'); return true; }}
                localization={{ locale: 'zh', translations: { 'generic.add': 'Test-Add' } }}
                mention={{
                    separator: ' ',
                    trigger: '@',
                    caseSensitive: true
                }}
            />
        )
    }
}