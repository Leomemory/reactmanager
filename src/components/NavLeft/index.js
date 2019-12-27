import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import MenuConfig from '../../config/menuConfig'
import { Menu } from 'antd';
import './index.less'
import {connect} from 'react-redux'  //连接器
import { switchMenu } from './../../redux/action' //事件行为
const SubMenu = Menu.SubMenu;

class NavLeft extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            currentKey: ''
        }
    }

    componentWillMount(){
       const menuTreeNode = this.renderMenu(MenuConfig)
       let currentKey = window.location.hash.replace(/#|\?.*$/g, '');
       this.setState({
           menuTreeNode,
           currentKey
       })
    }
    
    handleClick = ({item,key})=>{
         // console.log(item,key)
         if (key === this.state.currentKey) {
            return false;
        }
        //事件派发，自动调用reducer，通过reducer保存到store对象中
        const { dispatch } = this.props;
        dispatch(switchMenu(item.props.title))
        // console.log(item)
        this.setState({
            currentKey: key
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
                <NavLink to={item.key}>{item.title}</NavLink>
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
                <Menu theme="dark"
                      selectedKeys={[this.state.currentKey]}
                      onClick={this.handleClick}>
                    { this.state.menuTreeNode }
                </Menu>
            </div>
        );
    }
}
 
export default connect()(NavLeft);