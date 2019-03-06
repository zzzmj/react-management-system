import React, { Component } from 'react'
import { Card, Button, Modal } from 'antd'
import './ui.less'

class Modals extends Component {
    state = {
        showModal1: false,
        showModal2: false,
        showModal3: false,
    }

    handleShowModal(name) {
        console.log(name)
        this.setState({
            // 如果设置为 name: true, name会被视为属性, 而不是变量
            [name]: true
        })
    }

    handleShowPrompt(type) {
        Modal[type]({
            title: '信息提示框',
            content: '您在浏览的是信息提示框功能~',
            okText: '知道了',
            onOk() {
                console.log('知道了')
            }, 
            onCancel() {
                console.log('不喜欢')
            }
        })
    }

    handleShowConfirm(type) {
        Modal.confirm({
            title: '信息确认框',
            content: '您在浏览的是信息提示框功能~',
            okText: '知道了',
            okType: type,
            onOk() {
                console.log('ok')
            }, 
            onCancel() {
                console.log('cancel')
            }
        })
    }

    render() {
        return (
            <div className="modals">
                <Card title="基础模块框">
                    <Button
                        type="primary"
                        size="large"
                        onClick={() => this.handleShowModal('showModal1')}
                    >
                        基础模块框
                    </Button>
                    <Modal
                        title="React"
                        visible={this.state.showModal1}
                        onCancel={() => this.setState({ showModal1: false })}
                        onOk={() => this.setState({ showModal1: false })}
                    >
                        欢迎使用爱你牌管理系统
                    </Modal>
                    <Button
                        type="primary"
                        size="large"
                        onClick={() => this.handleShowModal('showModal2')}
                    >
                        自定义页脚
                    </Button>
                    <Modal
                        title="React"
                        visible={this.state.showModal2}
                        okText="好的"
                        cancelText="算了"
                        onCancel={() => this.setState({ showModal2: false })}
                        onOk={() => this.setState({ showModal2: false })}
                    >
                        欢迎使用爱你牌管理系统
                    </Modal>
                    <Button
                        type="primary"
                        size="large"
                        onClick={() => this.handleShowModal('showModal3')}
                    >
                        顶部20px
                    </Button>
                    <Modal
                        style={{ top: '20px' }}
                        title="React"
                        visible={this.state.showModal3}
                        okText="好的"
                        cancelText="算了"
                        onCancel={() => this.setState({ showModal3: false })}
                        onOk={() => this.setState({ showModal3: false })}
                    >
                        欢迎使用爱你牌管理系统
                    </Modal>
                </Card>

                <Card title="信息提示框">
                    <Button type="default" size="large" onClick={() => this.handleShowPrompt('info')} >info</Button>
                    <Button type="primary" size="large" onClick={() => this.handleShowPrompt('success')} >success</Button>
                    <Button type="dashed" size="large" onClick={() => this.handleShowPrompt('error')} >error</Button>
                    <Button type="danger" size="large" onClick={() => this.handleShowPrompt('warning')} >warning</Button>
                </Card>

                <Card title="信息确认框">
                    <Button type="default" size="large" onClick={() => this.handleShowConfirm('default')} >info</Button>
                    <Button type="primary" size="large" onClick={() => this.handleShowConfirm('primary')} >success</Button>
                    <Button type="dashed" size="large" onClick={() => this.handleShowConfirm('dashed')} >error</Button>
                    <Button type="danger" size="large" onClick={() => this.handleShowConfirm('danger')} >warning</Button>
                </Card>
            </div>
        )
    }
}

export default Modals
