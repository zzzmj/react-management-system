import React, { Component } from 'react';
import { Card, Button, Radio } from 'antd'
import './ui.less'

class Buttons extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            iconLoading: false,
            size: "default"
        }
        this.handleClickLoading = this.handleClickLoading.bind(this)
        this.handleClickIconLoading = this.handleClickIconLoading.bind(this)
        this.handleBtnSize = this.handleBtnSize.bind(this)
    }

    handleClickLoading() {
        this.setState({
            loading: true
        })
    }

    handleClickIconLoading() {
        this.setState({
            iconLoading: true
        })
    }

    handleBtnSize(e) {
        this.setState({
            size: e.target.value
        })
    }

    render() {
        return (
            <div className="buttons">
                <Card title="基础按钮">
                    <Button> default </Button>
                    <Button type="primary"> primary </Button>
                    <Button type="dashed"> dashed </Button>
                    <Button type="danger"> danger </Button>
                    <Button disabled> disabled </Button>
                </Card>

                <Card title="图形按钮">
                    <Button icon="plus"> 创建 </Button>
                    <Button icon="edit"> 编辑 </Button>
                    <Button icon="search"> 查找 </Button>
                    <Button icon="delete" type="danger"> 删除 </Button>
                    <Button shape="circle" icon="search" />
                    <Button type="primary" shape="round" icon="download" size="large">Download</Button>
                    <Button icon="download" type="primary"> 下载 </Button>
                </Card>

                <Card title="Loading按钮">
                    <Button type="primary" loading> 加载 </Button>
                    <Button shape="circle" loading />
                    <Button type="primary" loading={this.state.loading} onClick={this.handleClickLoading} size="large">点击加载</Button>
                    <Button icon="poweroff" shape="circle" type="primary" loading={this.state.iconLoading} onClick={this.handleClickIconLoading} size="large" />
                </Card>

                <Card title="按钮组">
                    <Button.Group>
                        <Button icon="left">前进</Button>
                        <Button icon="right">后退</Button>
                    </Button.Group>
                </Card>

                <Card title="按钮尺寸">
                    <Radio.Group value={this.state.size} onChange={this.handleBtnSize} >
                        <Radio value="small">小</Radio>
                        <Radio value="default">中</Radio>
                        <Radio value="large">大</Radio>
                    </Radio.Group>
                    <Button size={this.state.size}> default </Button>
                    <Button type="primary" size={this.state.size} > primary </Button>
                    <Button type="dashed" size={this.state.size} > dashed </Button>
                    <Button type="danger" size={this.state.size} > danger </Button>
                </Card>


            </div>
        )
    }
}

export default Buttons
