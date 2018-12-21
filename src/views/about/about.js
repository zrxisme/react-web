import React,{Component} from 'react'
import {  } from 'react-router'
export default class About extends Component{
    constructor(){
        super(...arguments)
        this.state= {
            text:'hello im about'
        }
        this.props.router.setRouteLeaveHook(
            this.props.route,
            this.routeLeaveHook
        )
    }
    componentDidMount(){
         console.log(this.props.router.location.query,333)
    }
    routeLeaveHook(){
    console.log('i wil liwave')
    }
    render(){
        return (
            <div>
                {this.state.text}
            </div>
        )
    }
}