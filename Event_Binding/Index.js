
import React, { Component } from 'react'

export default class Event_Binding extends Component {

    constructor (props){
        super (props)

        this.state = {
            count : 0
        }
        this.handelClick = this.handelClick.bind(this);
    }
    // handelClick = () => {
    //     this.setState({
    //         count : this.state.count + 1
    //     })        
    // }
    handelClick() {
        this.setState({
            count : this.state.count + 1
        })        
    }
    // no need "event bind" for use of arrow function
    // need "event bind" for use of normal function
    render() {
        return (
            <div className='eventBinding'>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handelClick}>increase</button>
            </div>
        )
    }
}