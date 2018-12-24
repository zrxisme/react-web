import React, { Component } from 'react'
import {
    Card,Row,Col
} from 'antd';
const { Meta } = Card;
export default class MyCard extends Component {
    render() {
        const arr = [0, 1, 2, 3, 5]
        return (
            <Row >
                {
                    arr.map((item, index) => {
                        return (
                            <Col span={4}>
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                            >
                                <Meta
                                    title="Europe Street beat"
                                    description="www.instagram.com"
                                />
                            </Card>
                            </Col>
                        )
                    })
                }
            </Row>
        )
    }
}