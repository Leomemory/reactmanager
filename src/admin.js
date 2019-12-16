import React, { Component } from 'react';
import { Row, Col } from 'antd';
import NavLeft from './components/NavLeft'
import Header from './components/Header'
import Footer from './components/Footer'
import './style/common.less'
// import Home from './pages/home/index'

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <Row className="container">
                <Col span={4} className="nav-left">
                    <NavLeft />
                </Col>
                <Col span={20} className="main">
                    <Header />
                    <Row className="content">
                        {/* <Home /> */}
                        { this.props.children }
                    </Row>
                    <Footer />
                </Col>
            </Row>
        );
    }
}
 
export default Admin;