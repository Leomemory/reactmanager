import React ,{ Component } from 'react';
import Child from './child'
import './child.less'

class life extends Component {
    constructor(props) {
        super(props);
        this.state = { count:0 }
    }
    render() { 
        let style = { padding:50 }
        return ( 
            <div className="content" style={style}>
               <p>react生命周期</p>
               <p>次数:{this.state.count}</p>
               <button onClick={this.handleAdd}>ES6点击一下</button>
               <button onClick={this.handleClick.bind(this)}>ES5点击一下</button>
               
               <br />

               <Child name={this.state.count}></Child>
            </div>
        );
    }

    handleAdd = ()=>{
        this.setState({
            count:this.state.count + 1
        })
    }

    handleClick(){
        this.setState({
            count:this.state.count + 1
        })
    }
}
 
export default life;
