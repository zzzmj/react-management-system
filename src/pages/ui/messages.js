import React, { Component } from 'react'
import { Card, Button, message } from 'antd'
import './ui.less'

class Messages extends Component {
    handleShowMsg = (type = "info") => {
        message[type]('提示用户的操作.')
    }

    render() {
        return (
            <div className="messages">
                <Card title="全局提示框">
                    <p>一般使用于用户操作后, 短暂的全局提醒,顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式</p>
                    <Button type="primary" onClick={() => this.handleShowMsg('success')} >success</Button>
                    <Button type="primary" onClick={() => this.handleShowMsg('info')} >info</Button>
                    <Button type="primary" onClick={() => this.handleShowMsg('warning')} >warning</Button>
                    <Button type="primary" onClick={() => this.handleShowMsg('error')} >error</Button>
                </Card>
            </div>
        )
    }
}

export default Messages
