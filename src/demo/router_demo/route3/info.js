import React, { Component } from 'react';

class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div>
                这里是测试动态路由功能。
                动态路由的值是：{this.props.match.params.value}
            </div>
        );
    }
}
 
export default Info;