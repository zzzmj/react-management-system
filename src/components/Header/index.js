import React, { Component } from 'react'
import Untils from '../../untils/untils'
import axios from 'axios'
import { Row } from 'antd'
import './index.less'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            weather: '',
            week: ''
        }
    }
    
    componentDidMount() {
        axios
            .get('http://t.weather.sojson.com/api/weather/city/101240501')
            .then(data => {
                const weather = data.data.data.forecast[0].type
                const week = data.data.data.forecast[0].week
                console.log(data.data.data)
                this.setState({
                    weather,
                    week
                })
            })
            .catch(error => {
                console.log('访问失败', error)
            })
    }

    render() {
        return (
            <header className="header">
                <Row className="header-user">
                    <div className="weather">
                        <span>今天是: {Untils.formatDate(new Date())}{this.state.week}, 宜春: </span>
                        <span>{this.state.weather}</span>
                    </div>
                    <ul className="header-list">
                        <li>消息</li>
                        <li>提醒</li>
                        <li>
                            <img
                                className="avator"
                                src="/assets/avator.png"
                                alt="avator"
                            />
                        </li>
                    </ul>
                </Row>

                <Row className="header-nav">
                    <p>首页 -> 标题</p>
                </Row>
            </header>
        )
    }
}

export default Header
