import React, { Component } from 'react'
import ReactEcharts from 'echarts-for-react';
import { randOptions,pieOption,StringGraph } from './expand'
import { Row, Col, Card } from 'antd';
import InforCard  from './components/inforCard'
import './home.less';
class Home extends Component {
    state = {
         inforCardData: [
          { title: '毕设动态', icon: 'usergroup-add', count: 803, color: '#2d8cf0' },
          { title: '课题通知', icon: 'team', count: 232, color: '#19be6b' },
          { title: '论文动态', icon: 'message', count: 142, color: '#ff9900' },
          { title: '分享统计', icon: 'alert', count: 657, color: '#ed3f14' },
          { title: '新增互动', icon: 'dollar', count: 12, color: '#E46CBB' },
          { title: '任务区', icon: 'euro', count: 14, color: '#9A66E4' }
        ],
    }
    onEvents() { }
    render() {
        const {inforCardData} = this.state
        return (
            <div className="home_container">
                <Row gutter={16}>
                    {inforCardData.map((infor, i) => {
                        return (
                            <Col xs={12} md={8} lg={4} key={`infor-${i}`} style={{ height: '120px', paddingBottom: '10px' }}>
                                <InforCard color={infor.color} icon={infor.icon}  count={infor.count} title={infor.title}>
                                </InforCard>
                            </Col>
                        )
                    })}

                </Row >
                <Row gutter={16}>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card bordered={false} style={{height:'380px'}}>
                                {/*<EchartsGraphnpm />*/}
                                <ReactEcharts
                                    option={pieOption}
                                    notMerge={true}
                                    lazyUpdate={true}
                                    style={{ width: '100%', height: '380px' }}
                                />
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card bordered={false} style={{height:'380px'}}>
                                <ReactEcharts
                                    option={randOptions}
                                    notMerge={true}
                                    lazyUpdate={true}
                                   
                                    style={{ width: '100%', height: '380px' }}
                                />
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card  bordered={false}>
                                <ReactEcharts
                                    option={StringGraph}
                                    notMerge={true}
                                    lazyUpdate={true}
                                   
                                    style={{ width: '100%', height: '360px' }}
                                />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div >
        )
    }
}


export default Home