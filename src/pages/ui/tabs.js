import React, { Component } from 'react';
import { Card, Tabs, message, Icon } from 'antd'
import './ui.less'
const { TabPane } = Tabs;

class tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    handleCallback = (key)=>{
        message.info("Hi,您选择了页签："+key)
    }

    componentWillMount(){
        const panes = [
            {
                title:'Tab 1',
                content: 'Tab 1内容',
                key:'1'
            },
            {
                title: 'Tab 2',
                content: 'Tab 2内容',
                key: '2'
            },
            {
                title: 'Tab 3',
                content: 'Tab 3内容',
                key: '3'
            }
        ]
        this.setState({
            activeKey: panes[0].key,
            panes
        })
    }

    onChange = (activeKey)=>{
        this.setState({
            activeKey
        })
    }

    onEdit = (targetKey, action) => {
        this[action](targetKey);
    }

    newTabIndex = 0;
    add = () => {
        const { panes } = this.state;
        const activeKey = `newTab${this.newTabIndex++}`;
        panes.push({ title: 'New Tab', content: 'New Tab Pane', key: activeKey });
        this.setState({ panes, activeKey });
    };
    
    remove = targetKey => {
        let { activeKey } = this.state;
        let lastIndex;
        this.state.panes.forEach((pane, i) => {
          if (pane.key === targetKey) {
            lastIndex = i - 1;
          }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
          if (lastIndex >= 0) {
            activeKey = panes[lastIndex].key;
          } else {
            activeKey = panes[0].key;
          }
        }
        this.setState({ panes, activeKey });
    };

    render() { 
        return (  
            <div>
                <Card title="Tab页签" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        <TabPane tab="Tab 1" key="1">欢迎学习React课程</TabPane>
                        <TabPane tab="Tab 2" key="2" disabled>欢迎学习React课程</TabPane>
                        <TabPane tab="Tab 3" key="3">React是一个非常受欢迎的MV*框架</TabPane>
                    </Tabs>
                </Card>

                <Card title="Tab带icon的页签" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.handleCallback}>
                        <TabPane tab={<span><Icon type="plus" />Tab 1</span>} key="1">欢迎学习React课程</TabPane>
                        <TabPane tab={<span><Icon type="edit" />Tab 2</span>} key="2">欢迎学习React课程</TabPane>
                        <TabPane tab={<span><Icon type="delete" />Tab 3</span>} key="3">React是一个非常受欢迎的MV*框架</TabPane>
                    </Tabs>
                </Card>

                <Card title="Tab带图的页签" className="card-wrap">
                    <Tabs 
                        onChange={this.onChange}
                        activeKey={this.state.activeKey}
                        type="editable-card"
                        onEdit={this.onEdit}
                    >
                        {
                            this.state.panes.map((panel)=>{
                                return <TabPane 
                                    tab={panel.title}
                                    key={panel.key}
                                >
                                    {panel.content}
                                </TabPane>
                            })
                        }
                    </Tabs>
                </Card>
            </div>
        );
    }
}
 
export default tabs;