import React, { Component, Fragment } from 'react'
import './components/style/common.less'
import { Row, Col } from 'antd'
import Header from './components/Header'
import Footer from './components/Footer'
import NavLeft from './components/NavLeft'

class Admin extends Component {
    render() {
        return (
            <Fragment>
                <Row className="container">
                    <Col span={3} className="nav-left">
                        <NavLeft />
                    </Col>
                    <Col span={21} className="main">
                        <Header />
                        <Row className="content">
                            {this.props.children}
                        </Row>
                        <Footer />
                    </Col>
                </Row>
            </Fragment>
        )
    }
}

export default Admin
