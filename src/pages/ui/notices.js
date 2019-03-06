import React, { Component } from 'react'
import { Card, Button, Badge, notification } from 'antd'
import './ui.less'

class Notices extends Component {
    state = {
        msgCount: 5,
    }

    handleOpenNotification = (type, direction = 'topLeft') => {
        notification.config({
            placement: direction
        })

        notification[type]({
            message: '发工资了',
            description: '上个月考勤22天, 迟到9天. 实发工资12000, 请笑纳.'
        })
        const count = this.state.msgCount
        if (count > 0) {
            this.setState({
                msgCount: count-1
            })
        }
    }



    render() {
        return (
            <div className="notice">
                <Card title="通知提醒框">
                    <p>在系统的四个角显示通知信息, 一般是系统提醒, 推送等用途</p>
                    <Badge className="wrap" count={this.state.msgCount}>
                        <Button onClick={ () => this.handleOpenNotification('success')} >success</Button>
                    </Badge>
                    <Badge className="wrap" count={this.state.msgCount}>
                        <Button onClick={ () => this.handleOpenNotification('info')} >info</Button>
                    </Badge>
                    <Badge className="wrap" count={this.state.msgCount}>
                        <Button onClick={ () => this.handleOpenNotification('warning')} >warning</Button>
                    </Badge>
                    <Badge className="wrap" count={this.state.msgCount}>
                        <Button onClick={ () => this.handleOpenNotification('error')} >error</Button>
                    </Badge>
                </Card>

                <Card title="调整方向">
                    <Button onClick={ () => this.handleOpenNotification('success', 'topLeft')} >success</Button>
                    <Button onClick={ () => this.handleOpenNotification('info', 'topRight')} >info</Button>
                    <Button onClick={ () => this.handleOpenNotification('warning', 'bottomLeft')} >warning</Button>
                    <Button onClick={ () => this.handleOpenNotification('error', 'bottomRight')} >error</Button>
                </Card>
            </div>
        )
    }
}

export default Notices
