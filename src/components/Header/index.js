import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import Util from '../../utils/utils'
import './index.less'
// import axios from '../../axios/index'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentWillMount(){
        this.setState({
            userName:'河畔一角'
        })

        setInterval(()=>{
            let sysTime = Util.formateDate(new Date().getTime())
            this.setState({
                sysTime
            })
        },1000)

        // this.getWeatherAPIData()
    }

    // getWeatherAPIData(){
    //     let city = '上海';
    //     axios.jsonp({
    //         url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2'
    //     }).then(res=>{
    //         if(res.status === 'success'){
    //             let data = res.results[0].weather_data[0];
    //             this.setState({
    //                 dayPictureUrl:data.dayPictureUrl,
    //                 weather:data.weather
    //             })
    //         }
    //     })
    // }

    render() { 
        const menuType = this.props.menuType;
        return (  
            <Router>
                <div className="header">
                    <Row className="header-top">
                        {
                            menuType ? <Col span={6}>
                                    <span>LJQ 通用管理系统</span>
                                </Col> : ''
                        }
                        <Col span={menuType? 18: 24}>
                            <span>欢迎，{this.state.userName}</span>
                            <Link to="/">退出</Link>
                        </Col>
                    </Row>
                    {
                        menuType ? '' : <Row className="breadcrumb">
                            <Col span={4} className="breadcrumb-title">
                                首页
                            </Col>
                            <Col span={20} className="weather">
                                <span className="date">{this.state.sysTime}</span>
                                <span className="weather-img">
                                    <img src={this.state.dayPictureUrl} alt="" />
                                </span>
                                <span className="weather-detail">
                                    {this.state.weather}
                                </span>
                            </Col> 
                        </Row> 
                    }
                </div>
            </Router>
        );
    }
}
 
export default Header;