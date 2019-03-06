import React, { Component } from 'react'
import { Card, Button, Icon, message, Tabs } from 'antd'
import './ui.less'
const TabPane = Tabs.TabPane
class MyTabs extends Component {
    constructor(props) {
        super(props)
        const panes = [
            {
                title: 'Tab 1',
                content: 'Tab 1',
                key: '1'
            },
            {
                title: 'Tab 2',
                content: 'Tab 2',
                key: '2'
            },
            {
                title: 'Tab 3',
                content: 'Tab 3',
                key: '3'
            }
        ]
        this.newTabsIndex = panes.length + 1
        this.state = {
            panes,
            activeKey: '1'
        }
    }

    handleShowTab = activeKey => {
        this.setState({
            activeKey
        })
    }

    handleEdit = (targetKey, action) => {
        // action 有两个值, 一个add, 一个remove.
        this[action](targetKey)
    }

    add = () => {
        const panes = this.state.panes
        const activeKey = `${this.newTabsIndex++}`
        panes.push({
            title: `Tab ${activeKey}`,
            content: `内容: ${activeKey}`,
            key: activeKey
        })
        this.setState({
            panes,
            activeKey
        })
    }

    remove = targetKey => {
        // 两种逻辑, 
        // 1. 如果删除的页签是当前页签, 则当前页面往前推一步, 如果前面没有, 就往后推
        // 2. 如果删除的页签不是当前页, 就直接删了
        let activeKey = this.state.activeKey
        let lastIndex
        // 找到删除页签的下标
        this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1
            }
        })
        const panes = this.state.panes.filter(pane => pane.key !== targetKey)
        if (panes.length && activeKey === targetKey) {
            if (lastIndex >= 0) {
                activeKey = panes[lastIndex].key
            } else {
                activeKey = panes[0].key
            }
        }
        this.setState({ panes, activeKey })
    }

    render() {
        const callback = key => {
            message.info(`你选择了第${key}页标签`)
        }
        return (
            <div className="tabs">
                <Card title="Tab页签">
                    <Tabs defaultActiveKey="1" onChange={callback}>
                        <TabPane tab="Tab 1" key="1">
                            Content of Tab Pane 1
                        </TabPane>
                        <TabPane tab="Tab 2" key="2" disabled>
                            Content of Tab Pane 2
                        </TabPane>
                        <TabPane tab="Tab 3" key="3">
                            Content of Tab Pane 3
                        </TabPane>
                    </Tabs>
                </Card>

                <Card title="带图标的Tab页签">
                    <Tabs defaultActiveKey="1" onChange={callback}>
                        <TabPane
                            tab={
                                <span>
                                    <Icon type="apple" />
                                    苹果
                                </span>
                            }
                            key="1"
                        >
                            苹果大法好
                        </TabPane>
                        <TabPane
                            tab={
                                <span>
                                    <Icon type="android" />
                                    安卓
                                </span>
                            }
                            key="2"
                        >
                            安卓大法好
                        </TabPane>
                        <TabPane
                            tab={
                                <span>
                                    <Icon type="plus" />
                                    一加
                                </span>
                            }
                            key="3"
                        >
                            一加大法好
                        </TabPane>
                    </Tabs>
                </Card>

                <Card title="可增删的Tab页签">
                    <Tabs
                        defaultActiveKey="1"
                        onChange={this.handleShowTab}
                        activeKey={this.state.activeKey}
                        onEdit={this.handleEdit}
                        type="editable-card"
                    >
                        {this.state.panes.map(pane => {
                            return (
                                <TabPane tab={pane.title} key={pane.key}>
                                    {pane.content}
                                </TabPane>
                            )
                        })}
                    </Tabs>
                </Card>
            </div>
        )
    }
}

export default MyTabs
