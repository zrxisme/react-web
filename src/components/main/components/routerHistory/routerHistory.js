import React, { Component } from 'react'
import { Tag } from 'antd';
import {getRouteHistory} from '../../../../util/libs'
import PropTypes from 'prop-types'
import './routerHistory.less'
class RouterHistory extends Component {
    state = {
        routes:[]
    }
    static contextTypes = {
        router:PropTypes.object.isRequired
    }
    
     componentDidMount(){
           this.setState({
               routes:getRouteHistory()
           }) 
        }
      changePage(e){
           const path = e.target.dataset.router
           this.context.router.push(path)
      }  
    render() {
        let {routes} = this.state
        return (
            <div  onClick={this.changePage.bind(this)}>
                <Tag data-router="/" color="#87d068" className="tag_item" key="/">首页</Tag>
                 {routes.map(item=>{
                     return (
                       <Tag closable data-router={item.path} color="#87d068" className="tag_item" key={item.path}>{item.meta.title}</Tag>   
                     )
                 })}
            </div>
         )
    }
}


export default RouterHistory