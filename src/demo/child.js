import React, { Component } from 'react';

class child extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    componentWillMount(){
        console.log('will mount')
    }

    componentDidMount(){
        console.log('did mount')
    }

    componentWillReceiveProps(newProps){
        console.log('will props' + newProps.name)
    }

    shouldComponentUpdate(){
        console.log('should update')
        return true;
    }

    componentWillUpdate(){
        console.log('will update')
    }

    componentDidUpdate(){
        console.log('did update')
    }
    render() { 
        return ( 
            <div>子组件：{this.props.name}</div>
         );
    }
}
 
export default child;