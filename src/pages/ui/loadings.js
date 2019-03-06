import React, { Component } from 'react'
import { Card, Spin, Icon, Alert } from 'antd'
import './ui.less'

class Loadings extends Component {
    render() {
        const antIcon = <Icon type="loading" style={{ fontSize: 30 }} spin />
        const antIcon2 = <Icon type="sync" style={{ fontSize: 30 }} spin />
        const antIcon3 = (
            <Icon type="loading-3-quarters" style={{ fontSize: 30 }} spin />
        )
        const text = `
                    我的儿子
                    你出生的那天,整个洛丹伦森林都在低语这一个名字,阿尔萨斯.
                    孩子,我骄傲的看着你一天天长大,成为正义的化身.
                    你要记住,我们一直都是以智慧与力量统治这个国家.
                    我也相信你能谨慎的使用自己强大的力量.
                    真正的胜利,是激励人民的心.
                    总有一天,我的生命将抵达终点.
                    而你,将加冕为王....`
        return (
            <div className="loadings">
                <Card title="加载状态">
                    <Spin className="item" size="small" />
                    <Spin className="item" size="default" />
                    <Spin className="item" size="large" />
                </Card>

                <Card title="自定义图标">
                    <Spin className="item" indicator={antIcon} />
                    <Spin className="item" indicator={antIcon2} />
                    <Spin className="item" indicator={antIcon3} />
                </Card>

                <Card title="内容遮罩">
                    <Spin spinning={false} className="item" tip="加载中...">
                        <Alert
                            description={text}
                            message="中二台词"
                            type="info"
                        />
                    </Spin>
                    <Spin className="item" tip="加载中...">
                        <Alert
                            description={text}
                            message="中二台词"
                            type="success"
                        />
                    </Spin>
                    <Spin className="item" tip="加载中...">
                        <Alert
                            description={text}
                            message="中二台词"
                            type="danger"
                        />
                    </Spin>
                </Card>
            </div>
        )
    }
}

export default Loadings
