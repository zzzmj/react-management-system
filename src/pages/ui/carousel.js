import React, { Component } from 'react'
import { Card, Button, message, Carousel } from 'antd'
import './ui.less'

class MyCarousel extends Component {
    render() {
        return (
            <div className="carousel">
                <Card title="轮播图">
                    <Carousel autoplay>
                        <div><h3>1</h3></div>
                        <div><h3>2</h3></div>
                        <div><h3>3</h3></div>
                        <div><h3>4</h3></div>
                    </Carousel>
                </Card>
            </div>
        )
    }
}

export default MyCarousel
