import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                
                找不到你的输入的网址 {this.props.match.url}
            </div>
        )
    }
}

export default Login
