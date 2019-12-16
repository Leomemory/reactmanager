import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import MenuConfig from '../../config/menuConfig'
import { Menu } from 'antd';
import './index.less'
const { SubMenu } = Menu;

class NavLeft extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentWillMount(){
       const menuTreeNode = this.renderMenu(MenuConfig)
       this.setState({
           menuTreeNode
       })
    }

    // 菜单渲染
    renderMenu = (data) =>{
        return data.map(item=>{
            if(item.children){
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>
                <Link to={item.key}>{item.title}</Link>
            </Menu.Item>
        })
    }

    render() { 
        return (  
            <div>
                <div className="logo">
                    <img src="" alt="" />
                    <h1>manager MS</h1>
                </div>
                <Router>
                <Menu theme="dark">
                    { this.state.menuTreeNode }
                </Menu>
                </Router>
            </div>
        );
    }
}
 
export default NavLeft;