import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Home';
import About from '../route1/About';
import Topic from '../route1/Topic';
import Info from './info'
import Main from './Main'
import NoMatch from './NoMatch'

class router extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <Router>
                <Home>
                    <Switch>
                        <Route path="/main" render={() =>
                            <Main>
                                <Route path="/main/:value" component={Info}></Route>
                            </Main>
                        }></Route>
                        <Route path="/about" component={About}></Route>
                        {/* <Route exact={true} path="/about/abc" component={About}></Route> */}
                        <Route path="/topics" component={Topic}></Route>
                        <Route component={NoMatch}></Route>
                    </Switch>
                </Home>
            </Router>
        );
    }
}
 
export default router;