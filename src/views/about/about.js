import React,{Component} from 'react'
export default class About extends Component{
    constructor(){
        super(...arguments)
        this.state= {
            text:'hello im about'
        }
       
    }
    componentDidMount(){
    }
    render(){
        return (
            <div>
                {this.state.text}
            </div>
        )
    }
}