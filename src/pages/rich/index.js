import React, { Component } from 'react';
import {Card, Button, Modal} from 'antd'
import {Editor} from 'react-draft-wysiwyg'
import draftjs from 'draftjs-to-html'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'

class Rich extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            showRichText: false,
            editorContent: '',
            editorState: ''
        }
    }

    //清空文本
    handleClearContent = () => {
        this.setState({
            editorState: ''
        })
    }

    //获取文本内容
    handleGetText = () => {
        this.setState({
            showRichText: true
        })
    }

    //编辑器的状态
    onEditorStateChange = (editorState) => {
        this.setState({
            editorState
        })
    }

    //编辑器内容的状态
    onEditorChange = (editorContent) => {
        this.setState({
            editorContent
        })
    }

    render() { 
        const { editorState, editorContent } = this.state;
        return (  
            <div>
                <Card>
                    <Button type="primary" onClick={this.handleClearContent}>清空内容</Button>
                    <Button type="primary" onClick={this.handleGetText} style={{marginLeft: 10}}>获取html文本</Button>
                </Card>
                <Card title="富文本编辑器">
                    <Editor 
                        editorState={editorState}
                        onEditorStateChange={this.onEditorStateChange}
                        onContentStateChange={this.onEditorChange}
                    />
                </Card>
                <Modal
                    title="富文本"
                    visible={this.state.showRichText}
                    onCancel={()=>{
                        this.setState({
                            showRichText:false
                        })
                    }}
                    footer={null}>
                    {draftjs(this.state.editorContent)}
                </Modal>
            </div>
        );
    }
}
 
export default Rich;