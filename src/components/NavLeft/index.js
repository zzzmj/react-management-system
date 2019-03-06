import React, { Component } from 'react'
import { Menu } from 'antd'
import './index.less'
import menuConfig from '../../config/menuConfig'
import { NavLink } from 'react-router-dom'
const { SubMenu } = Menu

class NavLeft extends Component {
    renderMenu = menuTree => {
        return menuTree.map(node => {
            if (node.children) {
                return (
                    <SubMenu key={node.key} title={node.title}>
                        {this.renderMenu(node.children)}
                    </SubMenu>
                )
            }
            return (
                <Menu.Item key={node.key}>
                    <NavLink to={node.key}>{node.title}</NavLink>
                </Menu.Item>
            )
        })
    }

    render() {
        return (
            <aside>
                <div className="logo">
                    <img src="/assets/react.svg" alt="logo" />
                    <h3 className="title">有爱的管理系统</h3>
                </div>
                <Menu theme="dark">{this.renderMenu(menuConfig)}</Menu>
            </aside>
        )
    }
}

export default NavLeft
