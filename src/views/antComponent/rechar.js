import React, { Component } from 'react'
import {RadarChart, ScatterChart,PolarGrid,Radar,PolarRadiusAxis, XAxis, YAxis, ZAxis, CartesianGrid, Scatter, Tooltip, Legend, ReferenceArea, ReferenceLine, ReferenceDot } from 'recharts';
import { Row, Col } from 'antd'
const data = [
  { subject: 'Math', A: 120, B: 110 },
  { subject: 'Chinese', A: 98, B: 130 },
  { subject: 'English', A: 86, B: 130 },
  { subject: 'Geography', A: 99, B: 100 },
  { subject: 'Physics', A: 85, B: 90 },
  { subject: 'History', A: 65, B: 85 },
];
const data01 = [
    { x: 100, y: 200, z: 200, errorY: [20, 30], errorX: 30 },
    { x: 120, y: 100, z: 260, errorY: 20, errorX: [20, 30] },
    { x: 170, y: 300, z: 400, errorY: [12, 8], errorX: 20 },
    { x: 140, y: 250, z: 280, errorY: 23, errorX: [12, 8] },
    { x: 150, y: 400, z: 500, errorY: [21, 10], errorX: 23 },
    { x: 110, y: 280, z: 200, errorY: 21, errorX: [21, 10] },
];

const data02 = [
    { x: 200, y: 260, z: 240 },
    { x: 240, y: 290, z: 220 },
    { x: 190, y: 290, z: 250 },
    { x: 198, y: 250, z: 210 },
    { x: 180, y: 280, z: 260 },
    { x: 210, y: 220, z: 230 },
];
export default class ReChar extends Component {
    render() {
        return (
            <Row>
                <Col span={10}>
                    <RadarChart
                        cx={300}
                        cy={250}
                        outerRadius={150}
                        width={600}
                        height={500}
                        data={data}
                    >
                        <PolarGrid />
                        <Tooltip />
                        <Radar
                            name="Mike"
                            dataKey="A"
                            stroke="#8884d8"
                            fill="#8884d8"
                            fillOpacity={0.6}
                            onMouseEnter={this.handleMouseEnter}
                        />
                        <Radar
                            name="Lily"
                            dataKey="B"
                            stroke="#82ca9d"
                            fill="#82ca9d"
                            fillOpacity={0.6}
                            animationBegin={180}
                        />
                        <Legend />
                        <PolarRadiusAxis domain={[0, 150]} label="score" />
                    </RadarChart>
                </Col>
                <Col span={2}></Col>
                <Col span={14}>
                    <ScatterChart width={500} height={500} margin={{ top: 50, right: 20, bottom: 0, left: 20 }}>
                        <XAxis type="number" dataKey="x" name="stature" unit="cm" />
                        <YAxis type="number" dataKey="y" name="weight" unit="kg" />
                        <ZAxis type="number" dataKey="z" range={[50, 1200]} name="score" unit="km" />
                        <CartesianGrid />
                        <Scatter name="A school" data={data01} fillOpacity={0.3} fill="#ff7300" />
                        <Scatter name="B school" data={data02} fill="#347300" />
                        <Tooltip />
                        <Legend />
                        <ReferenceArea x1={250} x2={300} alwaysShow label="any label" />
                        <ReferenceLine x={159} stroke="red" />
                        <ReferenceLine y={237.5} stroke="red" />
                        <ReferenceDot x={170} y={290} r={15} label="AB" stroke="none" fill="red" isFront />
                    </ScatterChart>
                </Col>
            </Row>
        )
    }
}