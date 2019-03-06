import React, { Component } from 'react'
import { Card, Row, Col } from 'antd'
import './ui.less'
const { Meta } = Card;
class Gallery extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }
    }

    createImageCard = () => {
        let count = Math.random()*200
        let imgs = []
        for (let i = 0; i < 4; i++) {
            imgs[i] = []
            for (let j = 0; j < 5;j++) {
                const height = parseInt((Math.random()*200) + 200)
                const url = `https://picsum.photos/200/${height}/?${count++}`
                imgs[i][j] = (
                    <Card 
                        style={{marginBottom: '20px'}}
                        loading={this.state.loading}
                        cover={<img src={url} alt="图片" />}>
                            <Meta
                                loading
                                title="一些图片"
                                description="www.instagram.com"
                            />
                    </Card>
                )
            }
        }
        return imgs
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
              loading: false
            })
        }, 5000)
    }

    render() {
        console.log(this.imgs)
        return (
            <div className="gallery">
                <Row gutter={10}>
                    {this.createImageCard().map((list) => (
                        <Col span={6}>
                            {list}
                        </Col>
                    ))}
                </Row>
            </div>
        )
    }
}

export default Gallery
